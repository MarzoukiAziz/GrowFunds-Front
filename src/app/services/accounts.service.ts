import { Account } from '../models/Account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})
export class AccountService {
    api_url!: string;
    url!: string;

    constructor(private http: HttpClient) {
        this.api_url = environment.apiserver;


}
getAccountsForAdmin(): Observable<string[]> {
    this.url = this.api_url + "/admin/accounts";
    return this.http.get<string[]>(this.url);
}
}
