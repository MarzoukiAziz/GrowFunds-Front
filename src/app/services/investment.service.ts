import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Investisment } from '../models/Investisment';
import { Projects } from '../models/Projects';
import {TokenStorageService} from "./token";
@Injectable({
  providedIn: 'root'
})
export class InvestmentService {


  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient,private _tok:TokenStorageService) {
    this.api_url = environment.apiserver;
  }
  //client
  getInvestmentsForClient(): Observable<Investisment[]> {
    const cid=this._tok.getUser().id;

    this.url = this.api_url + "/client/investments/client/"+cid;
    return this._http.get<Investisment[]>(this.url);
  }

  //client
  addInvest(i:Investisment,pid:number): Observable<Projects> {
    const cid=this._tok.getUser().id;
    this.url = this.api_url + "/client/investments/"+pid+"/add/client/"+cid;
    return this._http.post<Projects>(this.url,i);
  }
}

