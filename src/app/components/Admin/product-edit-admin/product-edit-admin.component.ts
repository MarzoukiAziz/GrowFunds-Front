import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-edit-admin',
  templateUrl: './product-edit-admin.component.html',
  styleUrls: ['./product-edit-admin.component.css']
})
export class ProductEditAdminComponent {
  p: Product = new Product();
  constructor(private router: Router, private _service: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const pid = this.route.snapshot.params['id'];
    this._service.getProductByIdAdmin(pid).subscribe(res => {
      this.p = res;
    });
  }


  editProduct() {
    this._service.editProduct(this.p).subscribe(
      res => this.router.navigate(['/admin/product/'+this.p.idProduct]).then(() => {
       // window.location.reload();
      }));
  }
}
