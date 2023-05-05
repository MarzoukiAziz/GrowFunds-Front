import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credits } from 'src/app/models/Credits';
import { User } from 'src/app/models/User';
import { PostModel } from 'src/app/models/post-model';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-answer-proposal-admin',
  templateUrl: './answer-proposal-admin.component.html',
  styleUrls: ['./answer-proposal-admin.component.css']
})
export class AnswerProposalAdminComponent {
  idCredit!: number;
  credit!: Credits;
  user!: User;
  postModel!: PostModel;
  mensuelPayment!: Number;
  test!: boolean;
  numAccount!: Number;
  constructor(private router: Router, private _service: CreditService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.test = false;

    this.idCredit = this.route.snapshot.params['id'];
    this._service.getCreditDetailsForAdmin(this.idCredit).subscribe(res => {
      this.credit = res;
      console.log(this.credit);
      this.numAccount=this.credit.account.accountNum;
    
    });
    
    this._service.getCreditUserForAdmin(this.idCredit).subscribe(res => {
      this.user = res;
    });
    this._service.getClientClassPredictions(this.idCredit).subscribe(res => {
      this.postModel = res;
    });
    this._service.getMensuelPayment(this.idCredit).subscribe(res => {
      this.mensuelPayment = res;
      this.credit.paymentMounthly= this.mensuelPayment;
    });
  }
  onApprove() {
    this.test = true;
  }
  onDeny() {
    this.credit.status = "DENIED";
    console.log(this.credit);
    alert(this.credit.account);
    this._service.updateCredit(this.credit).subscribe(res => {

      this.credit = res;
      this.router.navigate(['/admin/credits']).then(() => {
       // window.location.reload();
      })
    });

  }
}


