import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-clients-admin',
  templateUrl: './users-clients-admin.component.html',
  styleUrls: ['./users-clients-admin.component.css']
})
export class UsersClientsAdminComponent {

   user!: User[];
   u!:User;
  constructor(private router: Router,private _service: UserService) { }


  ngOnInit(): void {
    this._service.getClientForAdmin().subscribe(res => {
      this.user = res;
      

    });
  }
  deleteUser() {
    this._service.deleteUser(this.u).subscribe(
      res => this.router.navigate(['/admin/clients']).then(() => {  
        window.location.reload();
      }));
    }
  
}