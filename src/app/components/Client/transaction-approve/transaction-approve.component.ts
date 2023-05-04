import { AccountService } from 'src/app/services/accounts.service';
import { Transactions } from 'src/app/models/Transactions';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-approve',
  templateUrl: './transaction-approve.component.html',
  styleUrls: ['./transaction-approve.component.css']
})
export class TransactionApproveComponent {
  c: Transactions = new Transactions();
  code!:number;
  message!:String;
  v!: number;
  idd!: number;
  constructor(private router: Router, private route : ActivatedRoute,private service: TransactionsService,private aservice : AccountService) {
  }

  ngOnInit(): void {
    this.idd = this.route.snapshot.params['idTrans'];
   // this.c.ribrecipient= this.route.snapshot.params['ribrecipient'];
   // this.c.ribsource= this.route.snapshot.params['ribsource'];
   // this.c.amount= this.route.snapshot.params['amount'];
    //this.c.typetrans= this.route.snapshot.params['typetrans'];
   // this.c.ribrecipient= this.route.snapshot.params['ribrecipient'];
  }

  apptransactions(){
    console.log(this.code);
    this.service.apptransaction(this.service.code ,this.code).subscribe( data => {
      this.v = data;
      console.log(this.service.code)
      console.log(this.code)
      //this.trs={};
     // this.goTotransactionsList();
    }) ;
    //console.log(this.trs);
   // this.modalClose.nativeElement.click();
  }


}
