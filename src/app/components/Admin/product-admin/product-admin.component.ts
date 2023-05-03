import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {

  products!: Product[];


  constructor(private _service: ProductService ,   public imagesDialog: MatDialog, private imageProcessingService: ImageProcessingService) { }


  ngOnInit(): void {
    this._service.getProductsAdmin()
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(res => this.products = res);
    console.log(this.products)
  }
  showImages(product: Product) {
    console.log(product);
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      data: {
        images: product.image
      },
      height: '500px',
      width: '800px'});
    
  }

}
