import { Transactions } from './../../../models/Transactions';
//import { Transactions } from 'src/app/models/Transactions';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';
//import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-add-client',
  templateUrl: './transaction-add-client.component.html',
  styleUrls: ['./transaction-add-client.component.css']
})
export class TransactionAddClientComponent {
  //@ViewChild('myModalClose') modalClose: any;
  c: Transactions = new Transactions();
  myDate = new Date();
  list!: number[];
  code!:number;
  // private modalService: NgbModal
  ref:boolean=false;
  acc:boolean=false;
  v!:number

  constructor(private router: Router, private service: TransactionsService,) {
  }
test!:boolean
  ngOnInit(): void {
    this.test=false
   }

  addTransactionC() {
    this.service.addTransactionClient(this.c).subscribe(

      res => {
        this.service.code = res;

      })
      this.test=true;
  }
  apptransactions(){
    console.log(this.code);
    this.service.apptransaction(this.service.code ,this.code).subscribe( data => {
      this.v = data;

      if(this.v==0)this.ref=true
      else this.acc=true;
    })
  }

}

