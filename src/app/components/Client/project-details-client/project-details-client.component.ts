import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/models/Projects';
import { Revenue } from 'src/app/models/Revenue';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details-client',
  templateUrl: './project-details-client.component.html',
  styleUrls: ['./project-details-client.component.css']
})
export class ProjectDetailsClientComponent {

  projctid!: number;
  project!: Projects;

  investementsAmount:number=0;
  revenuesTotal:number=0;

  r:Revenue=new  Revenue();

  constructor(private _service: ProjectService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.projctid = this.route.snapshot.params['id'];
    this._service.getProjectForClient(this.projctid).subscribe(res => {
      this.project = res;
      this.investementsAmount=  this.project.investisments.reduce((acc, investment) => acc + investment.amount, 0);
      this.revenuesTotal =this.project.revenues.reduce((acc, revenue) => acc + revenue.revenue, 0);
    });
  }


  createRevenue(){
    this._service.addRevnue(this.r,this.projctid).subscribe(
      res=>{this.project=res;
      this.revenuesTotal =this.project.revenues.reduce((acc, revenue) => acc + revenue.revenue, 0);
    })
  }
}
