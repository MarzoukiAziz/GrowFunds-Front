import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  api_url!: string;
  url!: string;

  constructor(private _service:HttpClient) {
    this.api_url = environment.apiserver;
  }

  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Observable<number> {
    this.url = this.api_url + "/convert";
    console.log("Amount:", amount, "From Currency:", fromCurrency, "To Currency:", toCurrency);
    const url = `${this.url}/${amount}/${fromCurrency}/to/${toCurrency}`;
    console.log(url)
    return this._service.get<number>(url);
  }
}
