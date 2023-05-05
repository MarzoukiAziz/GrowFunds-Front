import { Injectable } from '@angular/core';
import { Credits } from '../models/Credits';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { PostModel } from '../models/post-model';
import { MonthlyPayment } from '../models/MonthlyPayment';
import { Account } from '../models/Account';

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
getCreditUserForAdmin(id: number):Observable<User>{
  this.url = this.api_url + "/admin/returnCreditUser/" + id;
  return this._service.get<User>(this.url);
}
getClientClassPredictions(id: number):Observable<PostModel>{
  this.url = this.api_url + "/admin/predictClientClassAndSetInterestRate/"+ id;
  return this._service.get<PostModel>(this.url);
}

updateCredit(credit: Credits):Observable<Credits>{
  this.url = this.api_url + "/admin/updateCredit" ;
  return this._service.put<Credits>(this.url,credit);
}
getPaymentHistory(id: Number):Observable<MonthlyPayment[]>{
  this.url = this.api_url + "/admin/getCreditMonthlyPayments/"+id;
    return this._service.get<MonthlyPayment[]>(this.url);
}
getMensuelPayment(id: Number):Observable<Number>{
  this.url = this.api_url + "/admin/mensuelPayment/"+id;
  return this._service.get<Number>(this.url);
}
getLateDays(id: Number):Observable<Number>{
  this.url = this.api_url + "/getLateDays/"+id;
  return this._service.get<Number>(this.url);
}
assignCreditToAccount(id: Number,num: Number):Observable<Account>{
  this.url = this.api_url + "/assignCreditToAccount/"+id+"/"+num;
  return this._service.get<Account>(this.url);
}
assignAccountToUser(id: Number,num: Number):Observable<User>{
  this.url = this.api_url + "/assignAccountToUser/"+id+"/"+num;
  return this._service.get<User>(this.url);
}


}
