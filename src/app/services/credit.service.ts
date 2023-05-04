import { Injectable } from '@angular/core';
import { Credits } from '../models/Credits';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  api_url!: string;
  url!: string;
  constructor(private _service:HttpClient) {
    this.api_url = environment.apiserver;
  }

  getCreditsForAdmin(): Observable<Credits[]> {
    this.url = this.api_url + "/admin/showAllCredits";
    return this._service.get<Credits[]>(this.url);
}
getCreditDetailsForAdmin(id: number): Observable<Credits> {
  this.url = this.api_url + "/admin/selectCreditById/" + id;
  return this._service.get<Credits>(this.url);
}
}
