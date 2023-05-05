import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent {
  products!: Product[];
  constructor(private _service: ProductService) { }


  ngOnInit(): void {
    this._service.getAllProductsAdmin().subscribe(res => {
      this.products = res;
    });

  }
}
