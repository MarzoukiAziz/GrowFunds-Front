import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details-admin',
  templateUrl: './user-details-admin.component.html',
  styleUrls: ['./user-details-admin.component.css']
})
export class UserDetailsAdminComponent {

  u!:User;
  userid!: number;
  user!: User[];


  constructor(private router: Router,private _service: UserService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this._service.getUserDetailsForAdmin(this.userid).subscribe(res => {
      this.u = res;
    });
  }

  deleteUser() {
    this._service.deleteUser(this.u).subscribe(
      res => this.router.navigate(['/admin/users']).then(() => {  
        window.location.reload();
      }));
    }
  
    updateUserByAdmin() {
      
      this._service.updateUserByAdmin(this.u).subscribe(res => this.u = res);
   

    }
}
