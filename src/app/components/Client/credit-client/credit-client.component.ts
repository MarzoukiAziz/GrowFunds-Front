import { Component } from '@angular/core';
import { Credits } from 'src/app/models/Credits';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit-client',
  templateUrl: './credit-client.component.html',
  styleUrls: ['./credit-client.component.css']
})
export class CreditClientComponent {
  credit!: Credits[];
  num!: number;
  test!:boolean;

  constructor(private _service: CreditService) { }


  ngOnInit(): void {
    this.test=false;
   

  }
  showCredits(){
    this.test=true;
    this._service.getClientCredits(this.num).subscribe(res => {
      this.credit = res;
     

    });

  }
}
