import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add-client',
  templateUrl: './product-add-client.component.html',
  styleUrls: ['./product-add-client.component.css']
})
export class ProductAddClientComponent {
  p: Product = new Product();
  constructor(private router: Router, private _service: ProductService) {
  }

  ngOnInit(): void {}

  addproduct() {
    this._service.addproductadmin(this.p).subscribe(
      res => this.router.navigate(['/admin/products']).then(() => {
        window.location.reload();
      }));
  }

}
