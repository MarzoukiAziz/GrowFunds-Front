import { Account } from 'src/app/models/Account';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/accounts.service';


@Component({
  selector: 'app-account-details-admin',
  templateUrl: './account-details-admin.component.html',
  styleUrls: ['./account-details-admin.component.css']
})
export class AccountDetailsAdminComponent {
  //AccountNum!: number;
  //account!: Account;
  //cr: ComplaintResponse = new ComplaintResponse();
  //constructor(private router: Router, private service : AccountService, private route: ActivatedRoute) {
  //}
  //ngOnInit(): void {
   // this.AccountNum = this.route.snapshot.params['id'];
    //this.service.getAccountDetailsForAdmin(this.AccountNum).subscribe((res: Account) => {
    //  this.account = res;
    //});

  //}

  accountNum!: number;
  account!: Account;
  cr: Account = new Account();
  constructor(private router: Router,private service: AccountService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.accountNum = this.route.snapshot.params['id'];
    this.service.getAccountDetailsForAdmin(this.accountNum).subscribe(res => {
      this.account = res;
    });

  }
  deleteAccount() {
    this.service.deleteAccount(this.account).subscribe(
      res => this.router.navigate(['/admin/accounts/']).then(() => {
        window.location.reload();
      }));
  }


}

