import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetairementService {


  api_url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }
  //Visitor
  getData(
    currentAge:number,
    initialNetWorth: number,
    yearlyIncome: number,
    yearlyIncreaseSalary: number,
    portfolioYearlyReturn: number,
    portfolioFees: number,
    percentageInvesting: number,
    retirementAge: number
  ) {
    const params = new URLSearchParams();
    params.set('currentAge', currentAge.toString());
    params.set('initialNetWorth', initialNetWorth.toString());
    params.set('yearlyIncome', yearlyIncome.toString());
    params.set('yearlyIncreaseSalary', yearlyIncreaseSalary.toString());
    params.set('portfolioYearlyReturn', portfolioYearlyReturn.toString());
    params.set('portfolioFees', portfolioFees.toString());
    params.set('percentageInvesting', percentageInvesting.toString());
    params.set('retirementAge', retirementAge.toString());

    const queryString = params.toString();
    const url = this.api_url + '/retirementPlan?'+queryString;

    return this._http.get<Map<string, number>[]>(url);
  }
}
