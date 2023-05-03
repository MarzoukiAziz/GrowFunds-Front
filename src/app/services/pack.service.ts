import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Packs } from '../models/Packs';
import { Likes } from '../Models/Likes';
@Injectable({
  providedIn: 'root'
})
export class PackService {

  
  url!: string
  api_url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }
  //client
  getPacksClient() {
    this.url = this.api_url + "/Packs/AfficherPack";
    return this._http.get<Packs[]>(this.url);
  

  }
  getPackDetailsForAdmin(id: number): Observable<Packs> {
    this.url = this.api_url + "/Packs/details/" + id;
    return this._http.get<Packs>(this.url);
}
addpack(c:Packs):Observable<Packs>{
  this.url=this.api_url+"/Packs/AjouterPack";
  return  this._http.post<Packs>(this.url, c);
}
getlikes(packageId: number): Observable<number> {
  this.url = this.api_url + "/Packs/likes-count/" + packageId;
  return this._http.get<number>(this.url);
}

addlike(id:number):Observable<Likes>{
  this.url=this.api_url+"/Packs/addlike/" + id;
  return  this._http.post<Likes>(this.url,id);
}
}