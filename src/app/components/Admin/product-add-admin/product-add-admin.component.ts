import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-admin',
  templateUrl: './product-add-admin.component.html',
  styleUrls: ['./product-add-admin.component.css']
})
export class ProductAddAdminComponent {
  p: Product = new Product();
  
  suggestedInterestRate: number=0;

  constructor(private router: Router, private _service: ProductService) {
  }

  ngOnInit(): void {}

  addProduct() {
    this._service.addProduct(this.p).subscribe(
      res => this.router.navigate(['/admin/products']).then(() => {
       // window.location.reload();
      }));
  }
  


calculateSuggestedInterestRate(price: number) {

    this.suggestedInterestRate = 8.02+price*0.002;

  }
}
