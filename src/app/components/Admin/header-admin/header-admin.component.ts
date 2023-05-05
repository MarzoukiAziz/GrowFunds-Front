import { Component } from '@angular/core';
import {TokenStorageService} from "../../../services/token";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {
  username:string=""
constructor(private _ts:TokenStorageService,private route:Router) {
}
  ngOnInit(): void {
    this.username=this._ts.getUser().username;

  }

  logout(){
    this._ts.signOut();
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
