import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Packs } from 'src/app/models/Packs';
import { Product } from 'src/app/models/Product';
import { PacksService } from 'src/app/services/packs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-packs-add-admin',
  templateUrl: './packs-add-admin.component.html',
  styleUrls: ['./packs-add-admin.component.css']
})
export class PacksAddAdminComponent {
  p: Packs = new Packs();
  products: Product[] = []
  selectedProduct:Product[] = []
  constructor(private router: Router, private _service: PacksService, private _pservice: ProductService) {
  }

  ngOnInit(): void {
    this._pservice.getAllProductsAdmin().subscribe(res => {
      this.products=res;
      this.p.product_pack=[];
    })
  }

  addPack() {
    this.selectedProduct.forEach(e=>this.p.product_pack.push(e))
    this._service.addPacks(this.p).subscribe(
      res => this.router.navigate(['/admin/packs']).then(() => {
        // window.location.reload();
      }));
  }
  addProductToPack(pro:Product){
    const bt=document.getElementById("btx"+pro.idProduct) as HTMLButtonElement;
    bt.disabled=true
    this.selectedProduct.push(pro)
  }
}
