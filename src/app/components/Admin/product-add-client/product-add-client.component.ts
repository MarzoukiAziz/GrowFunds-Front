import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
import { FileHandle } from 'src/app/models/file-handle.model';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-product-add-client',
  templateUrl: './product-add-client.component.html',
  styleUrls: ['./product-add-client.component.css']
})
export class ProductAddClientComponent {
  a!:string;
  i!:number;
  p: Product = {
    idProduct: this.i,
    nameProdcut: "",
    details: "",
    priceProduct: 0,
    quantity: 0,
    image: [],
  };
  constructor(private router: Router, private sanitizer: DomSanitizer,private _service: ProductService) {
  }

  ngOnInit(): void {}
  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.p.image.push(fileHandle);
    }
  }
  prepareFormDataForProduct(product: Product): FormData {
    const uploadImageData = new FormData();
    uploadImageData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    for (var i = 0; i < this.p.image.length; i++) {
      uploadImageData.append(
        "imageFile",
        this.p.image[i].file,
        this.p.image[i].file.name
      );
    }
    return uploadImageData;
  }
  
  addProduct(productForm: NgForm) {
    this.i++
    this.p.idProduct=this.i
    
    const formData = this.prepareFormDataForProduct(this.p);
    this._service.addProduct(formData).subscribe(
      (response: Product) => {
        productForm.reset();
        this.p.image = [];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
 
  
  removeImages(i: number) {
    this.p.image.splice(i, 1);
  }

}
