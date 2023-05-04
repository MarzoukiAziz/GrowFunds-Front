import { Account } from './../../../models/Account';

import { Component, OnInit } from '@angular/core';
//import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/services/accounts.service';
import { TypeAccount } from 'src/app/models/TypeAccount';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts-admin',
  templateUrl: './accounts-admin.component.html',
  styleUrls: ['./accounts-admin.component.css']
})
export class AccountsAdminComponent implements OnInit {
  accountid!: number;

  //complaint!: Complaint;
  cr: Account = new Account();
  //accountNum: any;
 // Account: Account;
  constructor(private router: Router, private service: AccountService, private route: ActivatedRoute) {
  }

  Listaccounts!: Account[];
  //constructor(private service: AccountService) { }

  ngOnInit(): void {
    //this. = this.route.snapshot.params['id'];
    this.service.getAccountsForAdmin().subscribe(res=>{console.log(res);
      this.Listaccounts=res});

    };

    
    ///////

  }

