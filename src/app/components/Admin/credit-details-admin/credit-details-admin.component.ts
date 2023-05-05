import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credits } from 'src/app/models/Credits';
import { User } from 'src/app/models/User';
import { PostModel } from 'src/app/models/post-model';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit-details-admin',
  templateUrl: './credit-details-admin.component.html',
  styleUrls: ['./credit-details-admin.component.css']
})
export class CreditDetailsAdminComponent {
  idCredit!: number;
  credit!: Credits;
  user! : User;
  postModel!: PostModel;
  constructor(private router: Router, private _service: CreditService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.idCredit = this.route.snapshot.params['id'];
    this._service.getCreditDetailsForAdmin(this.idCredit).subscribe(res => {
      this.credit = res;
    });
    this._service.getCreditUserForAdmin(this.idCredit).subscribe(res =>{
      this.user = res;
    });
    this._service.getClientClassPredictions(this.idCredit).subscribe(res =>{
      this.postModel = res;
    });

  }

}
