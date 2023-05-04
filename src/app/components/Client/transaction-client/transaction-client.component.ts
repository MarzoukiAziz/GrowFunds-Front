import { Transactions } from 'src/app/models/Transactions';
import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-transaction-client',
  templateUrl: './transaction-client.component.html',
  styleUrls: ['./transaction-client.component.css']
})
export class TransactionClientComponent {
  transactions!: Transactions[];
  rib!: number;
  pdfUrl: any;
  constructor(private router: Router, private service: TransactionsService) { }


  ngOnInit(): void {
    this.service.getTransactions().subscribe(res => {
      console.log(res);
      this.transactions = res;

    });

  }
  exportPDF(c:number){
    this.service.exportPDF(c,).subscribe( (data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const filename = 'TransactionHistory.pdf';
      saveAs(blob, filename);
    },
    error => console.error(error)
  );
  }
  exportPDF2(){
    this.service.exportPDF(this.rib,).subscribe( (data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const filename = 'TransactionHistory.pdf';
      saveAs(blob, filename);
    },
    error => console.error(error)
  );
  }



}





