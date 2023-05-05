import { AccountService } from './../../../services/accounts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body-visitor',
  templateUrl: './body-visitor.component.html',
  styleUrls: ['./body-visitor.component.css']
})
export class BodyVisitorComponent {
  v1:number=0;
  v3:number=0;
  v2:number=0;
  r1:number=0;
  r2:number=0;
  constructor(private _service :AccountService){

  }

  calculate(){
    const vv1=document.getElementById("v1") as HTMLInputElement;
    this.v1 = parseFloat(vv1.value.slice(4))
    const vv2=document.getElementById("v2") as HTMLInputElement;
    this.v2 = parseFloat(vv2.value.slice(4))
    const vv3=document.getElementById("v3") as HTMLInputElement;
    this.v3 = parseFloat(vv3.value.slice(4))

    this._service.calculatePlacement(this.v1,this.v3,this.v2).subscribe(res=>{
      this.r1=res[0]
      this.r2=res[1]
    })
  }
}
