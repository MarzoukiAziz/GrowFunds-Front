import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {

  products!: Product[];


  constructor(private _service: ProductService) { }


  ngOnInit(): void {
    this._service.getProductsAdmin().subscribe(res => this.products = res);
  }
}
