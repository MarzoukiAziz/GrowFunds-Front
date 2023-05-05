import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthlyPayment } from 'src/app/models/MonthlyPayment';
import { CreditService } from 'src/app/services/credit.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-payment-history-client',
  templateUrl: './payment-history-client.component.html',
  styleUrls: ['./payment-history-client.component.css']
})
export class PaymentHistoryClientComponent {
  idCredit!: number;
  monthlyPayments!: MonthlyPayment[];
  lateDays!: Number;
  pdfUrl!: any;
  constructor(private router: Router, private _service: CreditService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.idCredit = this.route.snapshot.params['id'];
    this._service.getPaymentHistory(this.idCredit).subscribe(res => {
      this.monthlyPayments = res;

    });
    this._service.getLateDays(this.idCredit).subscribe(res => {
      this.lateDays = res;

    });
}
exportPDF2(){
  this._service.exportPDF(this.idCredit,).subscribe( (data: Blob) => {
    const blob = new Blob([data], { type: 'application/pdf' });
    const filename = 'amortization.pdf';
    saveAs(blob, filename);
  },
  error => console.error(error)
);
}
}
