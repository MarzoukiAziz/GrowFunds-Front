import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-visitor',
  templateUrl: './products-visitor.component.html',
  styleUrls: ['./products-visitor.component.css']
})
export class ProductsVisitorComponent {
  products!: Product[];
  constructor(private _service: ProductService) { }


  ngOnInit(): void {
    this._service.getAllProductsVisitor().subscribe(res => {
      this.products = res;
      console.log(this.products)
    });

  }
}
