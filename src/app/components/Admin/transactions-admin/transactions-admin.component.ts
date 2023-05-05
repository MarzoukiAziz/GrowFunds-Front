import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transactions } from 'src/app/models/Transactions';
import { TransactionsService } from 'src/app/services/transactions.service';
import { saveAs } from 'file-saver';
//import { TTransactionsService } from 'src/app/services/TransactionsService';

@Component({
  selector: 'app-transactions-admin',
  templateUrl: './transactions-admin.component.html',
  styleUrls: ['./transactions-admin.component.css']
})
export class TransactionsAdminComponent {

  trans!: Transactions[];
  tranid!: number;
  rib!:number;

  //complaint!: Complaint;
  cr: Transactions = new Transactions();

  constructor(private router: Router, private service: TransactionsService, private route: ActivatedRoute) { }


  Listtransactions!: Transactions[];
  //constructor(private service: AccountService) { }

  ngOnInit(): void {
    //this. = this.route.snapshot.params['id'];
    this.service.getTransactionsForAdmin().subscribe(res=>{console.log(res);
      this.Listtransactions=res});


    };
    exportPDF(c:number){
      this.service.exportPDF(c).subscribe( (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const filename = 'HistoriquesTransactions.pdf';
        saveAs(blob, filename);
      },
      error => console.error(error)
    );
    }

  }
