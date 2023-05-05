import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-stat-admin',
  templateUrl: './stat-admin.component.html',
  styleUrls: ['./stat-admin.component.css']
})
export class StatAdminComponent {
  id!: number;
  loans!: String;
  roa!: number;
  ldr!: number;
  month!: number;
  list!: number[];
  list2!: number[];

  constructor(private router: Router, private service: AccountService) { }
  types=[
    "CASH LOAN",
    "BILL DISCOUNTING LOAN",
    "HYBRID LOAN",
    "PRODUCT LOAN",
    "SCHOOL FEES LOAN",
    "PAYDAY LOAN"
  ]

  ngOnInit(): void {


    this.service.getRoa().subscribe(
      res => {
        this.roa = res;
        this.service.getLdr().subscribe(
          res => {
            this.ldr = res;
            this.service.getBestloan().subscribe(
              res => {
                this.list2 = res;


              });
          });
      });


  }
  getstatclient(id: number, month: number) {
    this.service.getstatclient(this.id, this.month).subscribe(
      res => {
        console.log(res);
        this.list = res;



      });

  }



}


