import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-agents-admin',
  templateUrl: './users-agents-admin.component.html',
  styleUrls: ['./users-agents-admin.component.css']
})
export class UsersAgentsAdminComponent {
  user!: User[];
 
  constructor(private router: Router,private _service: UserService) { }


  ngOnInit(): void {
    this._service.getAgentForAdmin().subscribe(res => {
      this.user = res;
      

    });
  }
}