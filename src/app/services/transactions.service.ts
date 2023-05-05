
import { Transactions } from './../models/Transactions';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { Complaint } from '../models/Complaint';
//import { ComplaintResponse } from '../models/ComplaintResponse';




@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  api_url!: string;
  url!: string;
  code!:number;
  constructor(private http: HttpClient) {
      this.api_url = environment.apiserver;
  }
  //Admin
  getTransactionsForAdmin(): Observable<Transactions[]> {
    this.url = this.api_url + "/admin/transactions/Retrieve_All_Transactions";
    return this.http.get<Transactions[]>(this.url);
}


//Client
getTransactions(): Observable<Transactions[]> {
    this.url = this.api_url + "/client/transactions";
    return this.http.get<Transactions[]>(this.url);
}
getTransactionDetailsForAdmin(id: number): Observable<Transactions> {
    this.url = this.api_url + "/admin/transactions/c/" + id;
    return this.http.get<Transactions>(this.url);
}
addTransactionClient(c:Transactions):Observable<number>{
    this.url=this.api_url+"/client/transaction/add";
    return  this.http.post<number>(this.url, c);
}
updateTransactionByAdmin(transaction:Transactions): Observable<Transactions>  {
    this.url = this.api_url + "/client/transactions/edit/" + transaction.idTrans;
    return this.http.put<Transactions>(this.url, transaction);

}

deleteTransaction(p:Transactions){
    this.url=this.api_url+"/admin/transaction/delete/"+p.idTrans;
    return this.http.delete(this.url);
  }
  getpdf(id :number): Observable<Transactions[]> {
    this.url = this.api_url + "client/transaction/export-to-pdf";
    return this.http.get<Transactions[]>(this.url);
}
apptransaction(id :number, c:number) : Observable<number> {
    this.url = this.api_url + "/client/transaction/aa/"+id+"/"+c;
    return this.http.post<number>(this.url,c);

}
exportPDF(c: number): Observable<Blob> {
    return this.http.get(this.api_url+"/client/transaction/export-to-pdf/"+c,{ responseType: 'blob' });

}
}
