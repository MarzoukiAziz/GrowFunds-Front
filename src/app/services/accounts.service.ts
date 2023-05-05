import { Account } from '../models/Account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRef } from 'src/assets/client/vendor/fullcalendar/js/main';



@Injectable({
    providedIn: 'root'
})
export class AccountService {
    api_url!: string;
    url!: string;
    rib!: number;
    amount!: number;

    constructor(private http: HttpClient) {
        this.api_url = environment.apiserver;


    }
    getAccountsForAdmin(): Observable<Account[]> {
        this.url = this.api_url + "/admin/accounts/Retrieve_All_Accounts";
        return this.http.get<Account[]>(this.url);
    }


    //Client
    getAccounts(): Observable<Account[]> {
        this.url = this.api_url + "/client/accounts";
        return this.http.get<Account[]>(this.url);
    }
    getAccountDetailsForAdmin(id: number): Observable<Account> {
        this.url = this.api_url + "/admin/accounts/c/" + id;
        return this.http.get<Account>(this.url);
    }
    addAccountAdmin(c: Account): Observable<Account> {
        this.url = this.api_url + "/admin/accounts/add";
        return this.http.post<Account>(this.url, c);
    }
    updateAccountByAdmin(account: Account): Observable<Account> {
        this.url = this.api_url + "/admin/accounts/edit/" + account.accountNum;
        return this.http.put<Account>(this.url, account);

    }

    deleteAccount(p: Account) {
        this.url = this.api_url + "/admin/account/delete/" + p.accountNum;
        return this.http.delete(this.url);
    }
    deposemoney(rib: number, amount: number): Observable<void> {
        this.url = this.api_url + "/admin/account/" + rib + amount;
        return this.http.post<void>(this.url, {});
    }
    getstatclient(id: number, a: number): Observable<number[]> {
        this.url = this.api_url + "/client/month/monthly-Spendings/" + id + a;
        return this.http.get<number[]>(this.url);
    }
    getRoa(): Observable<number> {
        this.url = this.api_url + "/client/roa";
        return this.http.get<number>(this.url);
    }
    getLdr(): Observable<number> {
        this.url = this.api_url + "/client/ldr";
        return this.http.get<number>(this.url);
    }
    getBestloan(): Observable<number[]> {
        this.url = this.api_url + "/client/most-profit";
        return this.http.get<number[]>(this.url);
    }

    calculatePlacement(v1:number,v2:number,v3:number): Observable<number[]> {
        this.url = this.api_url + "/calculate-placement/"+v1+"/"+v2+"/"+v3;
        return this.http.get<number[]>(this.url);
    }


}
