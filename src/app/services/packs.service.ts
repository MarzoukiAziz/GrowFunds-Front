import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Packs } from '../models/Packs';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }
  //Admin
  getAllPackssAdmin(): Observable<Packs[]> {
    this.url = this.api_url + "/admin/packs/all";
    return this._http.get<Packs[]>(this.url);
  }

  addPacks(p: Packs): Observable<Packs> {
    this.url = this.api_url + "/admin/packs/add";
    return this._http.post<Packs>(this.url, p);
  }

  editPacks(p: Packs): Observable<Packs> {
    this.url = this.api_url + "/admin/packs/edit";
    return this._http.put<Packs>(this.url, p);
  }
  deletPacks(pid: number): Observable<Packs> {
    this.url = this.api_url + "/admin/packs/"+pid+"/delete";
    return this._http.delete<Packs>(this.url);
  }

  getPacksByIdAdmin(pid:number): Observable<Packs> {
    this.url = this.api_url + "/admin/packs/"+pid;
    return this._http.get<Packs>(this.url);
  }

  //client
  getAllPackssClient(): Observable<Packs[]> {
    this.url = this.api_url + "/client/packs/all";
    return this._http.get<Packs[]>(this.url);
  }

  getPacksByIdClient(pid:number): Observable<Packs> {
    this.url = this.api_url + "/client/packs/"+pid;
    return this._http.get<Packs>(this.url);
  }
  like(p:Packs): Observable<Packs> {
    this.url = this.api_url + "/client/packs/like";
    return this._http.put<Packs>(this.url,p);
  }
//Visitor
getAllPackssVisitor(): Observable<Packs[]> {
  this.url = this.api_url + "/packs/all";
  return this._http.get<Packs[]>(this.url);
}

}
