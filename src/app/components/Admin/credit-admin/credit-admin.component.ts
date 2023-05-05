import { Component } from '@angular/core';
import { Credits } from 'src/app/models/Credits';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit-admin',
  templateUrl: './credit-admin.component.html',
  styleUrls: ['./credit-admin.component.css']
})
export class CreditAdminComponent {
  credit!: Credits[];

  constructor(private _service: CreditService) { }


  ngOnInit(): void {
    this._service.getCreditsForAdmin().subscribe(res => {
      this.credit = res;
      console.log(this.credit);

    });

  }
}
