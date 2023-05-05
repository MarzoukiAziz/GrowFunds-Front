import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-admin',
  templateUrl: './projects-admin.component.html',
  styleUrls: ['./projects-admin.component.css']
})
export class ProjectsAdminComponent {


  projects!: Projects[];
  budgetTotal:number=0
  constructor(private _service: ProjectService) { }


  ngOnInit(): void {
    this._service.getProjectsForAdmin().subscribe(res => {
      this.projects = res;
      this.budgetTotal=  this.projects.reduce((acc, p) => acc + p.budget, 0);

      console.log(this.projects)
    });

  }

}
