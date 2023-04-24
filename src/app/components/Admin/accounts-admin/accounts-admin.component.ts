
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/services/accounts.service';
import { TypeAccount } from 'src/app/models/TypeAccount';

@Component({
  selector: 'app-accounts-admin',
  templateUrl: './accounts-admin.component.html',
  styleUrls: ['./accounts-admin.component.css']
})
export class AccountsAdminComponent implements OnInit {


  Listaccounts!: string[];

  constructor(private service: AccountService) { }


  ngOnInit(): void {
    this.service.getAccountsForAdmin().subscribe(res=>{console.log(res);
      this.Listaccounts=res});

    };

    ///////

  }

