import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent {
  products !: Product[];
  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProductsAdmin()
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(res => this.products= res);
  }



}
