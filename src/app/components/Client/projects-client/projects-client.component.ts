import { Component } from '@angular/core';
import { Projects } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-client',
  templateUrl: './projects-client.component.html',
  styleUrls: ['./projects-client.component.css']
})
export class ProjectsClientComponent {

  projects!: Projects[];
  constructor(private _service: ProjectService) { }


  ngOnInit(): void {
    this._service.getProjectsForClient().subscribe(res => {
      this.projects = res;
    });

  }

}
