import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { Credits } from 'src/app/models/Credits';
import { User } from 'src/app/models/User';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit-add-client',
  templateUrl: './credit-add-client.component.html',
  styleUrls: ['./credit-add-client.component.css']
})
export class CreditAddClientComponent {
credit!: Credits;
user!: User;
num!: number;
account! : Account;
constructor(private router: Router, private _service: CreditService, private route: ActivatedRoute) {

}
ngOnInit(): void {
  this.credit.status= "PENDING";
}
onSubmit(){
  
  this.credit.account.accountNum=this.num;

    this._service.updateCredit(this.credit).subscribe(res => {

      this.credit = res;
      this.router.navigate(['/client/creditsClient']).then(() => {
       // window.location.reload();
      })
    });
}
}
