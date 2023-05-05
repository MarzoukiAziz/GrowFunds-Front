import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }
  //Admin
  getAllProductsAdmin(): Observable<Product[]> {
    this.url = this.api_url + "/admin/product/all";
    return this._http.get<Product[]>(this.url);
  }

  addProduct(p: Product): Observable<Product> {
    this.url = this.api_url + "/admin/product/add";
    return this._http.post<Product>(this.url, p);
  }

  editProduct(p: Product): Observable<Product> {
    this.url = this.api_url + "/admin/product/edit";
    return this._http.put<Product>(this.url, p);
  }
  deletProduct(pid: number): Observable<Product> {
    this.url = this.api_url + "/admin/product/"+pid+"/delete";
    return this._http.delete<Product>(this.url);
  }

  getProductByIdAdmin(pid:number): Observable<Product> {
    this.url = this.api_url + "/admin/product/"+pid;
    return this._http.get<Product>(this.url);
  }

  //client
  getAllProductsClient(): Observable<Product[]> {
    this.url = this.api_url + "/client/product/all";
    return this._http.get<Product[]>(this.url);
  }

  getProductByIdClient(pid:number): Observable<Product> {
    this.url = this.api_url + "/client/product/"+pid;
    return this._http.get<Product>(this.url);
  }
//Visitor
getAllProductsVisitor(): Observable<Product[]> {
  this.url = this.api_url + "/product/all";
  return this._http.get<Product[]>(this.url);
}

}
