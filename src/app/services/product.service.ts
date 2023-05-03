import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url!: string
  api_url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }
  //admin
  getProductsAdmin() {
    this.url = this.api_url + "/admin/product/showall";
    return this._http.get<Product[]>(this.url);
   
  

  }
  getProductDetailsForAdmin(id: number): Observable<Product> {
    this.url = this.api_url + "/admin/product/details/" + id;
    return this._http.get<Product>(this.url);
}
deleteProduct(p:Product){
  this.url=this.api_url+"/admin/product/delete/"+p.idProduct;
  return this._http.delete(this.url);
}
  //client
  

    public addProduct(product: FormData) {
      this.url=this.api_url+"/admin/add";
      return this._http.post<Product>(this.url, product);
    } 
   
  


}
