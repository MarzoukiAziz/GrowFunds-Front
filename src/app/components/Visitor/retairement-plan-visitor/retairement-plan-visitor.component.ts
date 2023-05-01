import { Component } from '@angular/core';
import { number } from 'joi';
import { RetairementService } from 'src/app/services/retairement.service';

@Component({
  selector: 'app-retairement-plan-visitor',
  templateUrl: './retairement-plan-visitor.component.html',
  styleUrls: ['./retairement-plan-visitor.component.css']
})
export class RetairementPlanVisitorComponent {
  currentAge!: number;
  initialNetWorth!: number;
  yearlyIncome!: number;
  yearlyIncreaseSalary!: number;
  portfolioYearlyReturn!: number;
  portfolioFees!: number;
  percentageInvesting!: number;
  retirementAge!: number;

  data: Map<string, number>[] = [];
  nums:number[]=[];
  constructor(private _service: RetairementService) { }

  calculate() {
    this._service.getData(
      this.currentAge,
      this.initialNetWorth,
      this.yearlyIncome,
      this.yearlyIncreaseSalary,
      this.portfolioYearlyReturn,
      this.portfolioFees,
      this.percentageInvesting,
      this.retirementAge
    ).subscribe(res => {
      this.data = res;
      const selectElement = document.getElementById("res") as HTMLDivElement;
      selectElement.classList.remove("d-none")
      
    })

    this._service.getData2(
      this.currentAge,
      this.initialNetWorth,
      this.yearlyIncome,
      this.yearlyIncreaseSalary,
      this.portfolioYearlyReturn,
      this.portfolioFees,
      this.percentageInvesting,
      this.retirementAge
    ).subscribe(res => {
      this.nums = res;
      console.log(this.nums)
      const dta = document.getElementById("data254") as HTMLParagraphElement;
      dta.textContent=JSON.stringify(this.nums);
      
    })
  }

}
