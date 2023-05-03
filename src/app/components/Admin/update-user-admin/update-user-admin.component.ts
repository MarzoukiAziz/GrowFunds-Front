import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user-admin',
  templateUrl: './update-user-admin.component.html',
  styleUrls: ['./update-user-admin.component.css']
})
export class UpdateUserAdminComponent {

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
  updateUserByAdmin() {
      
    this._service.updateUserByAdmin(this.u).subscribe(res => this.u = res);
 

  }
}
