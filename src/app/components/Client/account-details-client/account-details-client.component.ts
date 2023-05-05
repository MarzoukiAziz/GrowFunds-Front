import { Account } from 'src/app/models/Account';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-account-details-client',
  templateUrl: './account-details-client.component.html',
  styleUrls: ['./account-details-client.component.css']
})
export class AccountDetailsClientComponent {
  accountNum!: number;
  account!: Account;
  cr: Account = new Account();
  constructor(private service: AccountService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.accountNum = this.route.snapshot.params['id'];
    this.service.getAccountDetailsForAdmin(this.accountNum).subscribe(res => {
      this.account = res;
    });
  }

}
