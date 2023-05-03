import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add-client',
  templateUrl: './project-add-client.component.html',
  styleUrls: ['./project-add-client.component.css']
})
export class ProjectAddClientComponent {
  c:Projects=new Projects()

  constructor(private router: Router, private _service: ProjectService) {
  }

  ngOnInit(): void {}

  addProject() {
    this._service.addProject(this.c).subscribe(
      res => this.router.navigate(['/client/projects']).then(() => {
        window.location.reload();
      }));
  }


}
