import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/models/Projects';
import { TypeProjectStatus } from 'src/app/models/TypeProjectStatus';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details-admin',
  templateUrl: './project-details-admin.component.html',
  styleUrls: ['./project-details-admin.component.css']
})
export class ProjectDetailsAdminComponent {

  projctid!: number;
  project!: Projects;

  investementsAmount:number=0;
  revenuesTotal:number=0;


  constructor(private _service: ProjectService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.projctid = this.route.snapshot.params['id'];
    this._service.getProjectForClient(this.projctid).subscribe(res => {
      this.project = res;
      this.investementsAmount=  this.project.investisments.reduce((acc, investment) => acc + investment.amount, 0);
      this.revenuesTotal =this.project.revenues.reduce((acc, revenue) => acc + revenue.revenue, 0);
    });
  }
  updateProject(s:number){
      switch (s) {
        case 0:
          this.project.status = TypeProjectStatus.NOT_STARTED
          break;
        case 1:
          this.project.status = TypeProjectStatus.APPROVED
          break;
        case 2:
          this.project.status = TypeProjectStatus.REJECTED
          break;
  
      }
      this._service.updateProjectStatus(this.project).subscribe(res => this.project = res);
    
  }

 
}
