import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-client',
  templateUrl: './products-client.component.html',
  styleUrls: ['./products-client.component.css']
})
export class ProductsClientComponent {
  products!: Product[];
  constructor(private _service: ProductService) { }


  ngOnInit(): void {
    this._service.getAllProductsAdmin().subscribe(res => {
      this.products = res;
    });

  }
}
