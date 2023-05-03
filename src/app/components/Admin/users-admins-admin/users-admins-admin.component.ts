import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-admins-admin',
  templateUrl: './users-admins-admin.component.html',
  styleUrls: ['./users-admins-admin.component.css']
})
export class UsersAdminsAdminComponent {

  user!: User[];
 
  constructor(private router: Router,private _service: UserService) { }


  ngOnInit(): void {
    this._service.getAdminForAdmin().subscribe(res => {
      this.user = res;
      

    });
  }
}