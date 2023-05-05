import { Component } from '@angular/core';
import { Notification } from 'src/app/models/Notification';
import { PublicNotification } from 'src/app/models/PublicNotification';
import { PrivateNotificationService } from 'src/app/services/private-notification.service';
import { PublicNotificationService } from 'src/app/services/public-notification.service';
import {UserService} from "../../../services/user.service";
import {TokenStorageService} from "../../../services/token";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent {
  notifs!:PublicNotification[]
  unread:number=0
  username:string=""
  pnotifs!:Notification[]

  constructor(private _service:PublicNotificationService, private _pnotifservice:PrivateNotificationService,private _uservice:UserService,private _ts:TokenStorageService,private route:Router){}

  ngOnInit(): void {


    this.username=this._ts.getUser().username;
    this._service.getPublicNotifForClient().subscribe(res => {
      this.notifs = res;
    });
    this._pnotifservice.getNotifsForClient().subscribe(res => {
      this.pnotifs = res;
      this.pnotifs.forEach(p=>{
        if (p.status.toString()=="UNREAD")this.unread++;
      })

    });

  }

  logout(){
    this._ts.signOut();
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
