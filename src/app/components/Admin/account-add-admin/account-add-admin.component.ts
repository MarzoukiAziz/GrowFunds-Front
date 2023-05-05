import { Account } from 'src/app/models/Account';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-account-add-admin',
  templateUrl: './account-add-admin.component.html',
  styleUrls: ['./account-add-admin.component.css']
})
export class AccountAddAdminComponent {
  c: Account = new Account();
  constructor(private router: Router, private service: AccountService) {
  }

  ngOnInit(): void {}

  addAccount() {
    this.service.addAccountAdmin(this.c).subscribe(
      res => this.router.navigate(['/admin/accounts/']).then(() => {
        window.location.reload();
        //this.service.addAccountAdmin(this.c).subscribe(()=> this.router.navigateByUrl("/admin/accounts")

      }));
    }

}
