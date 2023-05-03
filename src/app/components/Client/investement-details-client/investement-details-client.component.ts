import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { number } from 'joi';
import { Investisment } from 'src/app/models/Investisment';
import { Projects } from 'src/app/models/Projects';
import { InvestmentService } from 'src/app/services/investment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-investement-details-client',
  templateUrl: './investement-details-client.component.html',
  styleUrls: ['./investement-details-client.component.css']
})
export class InvestementDetailsClientComponent {
  projctid!: number;
  project!: Projects;

  investementsAmount:number=0;
  myInves:number=0
  revenuesTotal:number=0;
  myInvestements:Investisment[]=[]
  myRevenue:number[]=[]
  r:Investisment=new  Investisment();

  constructor(private _service: ProjectService,private _iservice : InvestmentService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.projctid = this.route.snapshot.params['id'];
    this._service.getProjectForClient(this.projctid).subscribe(res => {
      this.project = res;
      //to be changed later
      this.myInvestements=this.project.investisments.filter(x=>x.investor.id==2)
      this.investementsAmount=  this.project.investisments.reduce((acc, investment) => acc + investment.amount, 0);
      this.myInves= this.project.investisments.filter(x=>x.investor.id==2).reduce((acc, investment) => acc + investment.amount, 0);
      this.revenuesTotal =this.project.revenues.reduce((acc, revenue) => acc + revenue.revenue, 0);
      this.calculateMyRevenue()

    });
  }
  createInvestement(){
    console.log(this.r)
    this._iservice.addInvest(this.r,this.projctid).subscribe(res=>{
      this.project = res;
      //to be changed later
      this.myInvestements=this.project.investisments.filter(x=>x.investor.id==2)
      this.investementsAmount=  this.project.investisments.reduce((acc, investment) => acc + investment.amount, 0);
      this.myInves= this.project.investisments.filter(x=>x.investor.id==2).reduce((acc, investment) => acc + investment.amount, 0);
      this.revenuesTotal =this.project.revenues.reduce((acc, revenue) => acc + revenue.revenue, 0);
      this.calculateMyRevenue()

    })
  }


  calculateMyRevenue(){
    this.project.revenues.forEach(r=>{
      var inv =this.myInvestements.filter(i =>i.dateInvest<r.dateDeclaration).reduce((acc, investment) => acc + investment.amount, 0);
      this.myRevenue.push(inv/this.project.budget*r.revenue)
      console.log(r.dateDeclaration,  inv)
    })
  }

}
