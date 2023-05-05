import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-admin',
  templateUrl: './product-details-admin.component.html',
  styleUrls: ['./product-details-admin.component.css']
})
export class ProductDetailsAdminComponent {
  pid!: number;
  product!: Product;
  constructor(private router: Router, private _service: ProductService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.pid = this.route.snapshot.params['id'];
    this._service.getProductByIdAdmin(this.pid).subscribe(res => {
      this.product = res;
    });
  }

  deleteProduct() {
    this._service.deletProduct(this.pid).subscribe(
      res => this.router.navigate(['/admin/products']).then(() => {
        //window.location.reload();
      }));
  }


}
