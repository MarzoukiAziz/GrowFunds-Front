import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthlyPayment } from 'src/app/models/MonthlyPayment';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-payment-history-admin',
  templateUrl: './payment-history-admin.component.html',
  styleUrls: ['./payment-history-admin.component.css']
})
export class PaymentHistoryAdminComponent {
  idCredit!: number;
  monthlyPayments!: MonthlyPayment[];
  constructor(private router: Router, private _service: CreditService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.idCredit = this.route.snapshot.params['id'];
    this._service.getPaymentHistory(this.idCredit).subscribe(res => {
      this.monthlyPayments = res;

    });
}}
