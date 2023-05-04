import { AccountService } from 'src/app/services/accounts.service';
import { Component } from '@angular/core';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-account-client',
  templateUrl: './account-client.component.html',
  styleUrls: ['./account-client.component.css']
})
export class AccountClientComponent {
  accounts!: Account[];
  constructor(private _service: AccountService) { }


  ngOnInit(): void {
    this._service.getAccounts().subscribe(res => {
      console.log(res);
      this.accounts = res;

    });

  }

}
