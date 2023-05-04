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






        //.then(() => {
        //window.location.reload();
        //this.service.addAccountAdmin(this.c).subscribe(()=> this.router.navigateByUrl("/admin/accounts")

      })
      this.test=true;
  }
v!:number
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


      //}));

    //this.openVerticallyCentered(content)
    //console.log(this.trs);

  //openVerticallyCentered(content) {
  //  this.modalService.open(content, { centered: true });
  //}




