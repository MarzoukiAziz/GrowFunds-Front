import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Investisment } from '../models/Investisment';
import { Projects } from '../models/Projects';
@Injectable({
  providedIn: 'root'
})
export class InvestmentService {


  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }
  //client
  getInvestmentsForClient(): Observable<Investisment[]> {
    this.url = this.api_url + "/client/investments";
    return this._http.get<Investisment[]>(this.url);
  }

  //client
  addInvest(i:Investisment,pid:number): Observable<Projects> {
    this.url = this.api_url + "/client/investments/"+pid+"/add";
    return this._http.post<Projects>(this.url,i);
  }
}

