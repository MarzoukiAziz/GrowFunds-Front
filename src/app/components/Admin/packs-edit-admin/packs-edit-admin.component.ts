import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packs } from 'src/app/models/Packs';
import { Product } from 'src/app/models/Product';
import { PacksService } from 'src/app/services/packs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-packs-edit-admin',
  templateUrl: './packs-edit-admin.component.html',
  styleUrls: ['./packs-edit-admin.component.css']
})
export class PacksEditAdminComponent {
  p: Packs = new Packs();
  products: Product[] = []
  selectedProduct:Product[] = []

  constructor(private router: Router, private _service: PacksService,private _pservice: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const pid = this.route.snapshot.params['id'];
    this._service.getPacksByIdAdmin(pid).subscribe(res => {
      this.p = res;
      this.p.product_pack=[]
      this._pservice.getAllProductsAdmin().subscribe(res=>{
        this.products=res;
      })
    });
  }


  editPack() {
    this.selectedProduct.forEach(e=>this.p.product_pack.push(e))

    this._service.editPacks(this.p).subscribe(
      res => this.router.navigate(['/admin/packs/'+this.p.idPacks]).then(() => {
       // window.location.reload();
      }));
  }

  addProductToPack(pro:Product){
    const bt=document.getElementById("btx"+pro.idProduct) as HTMLButtonElement;
    bt.disabled=true
    this.selectedProduct.push(pro)
  }
}
