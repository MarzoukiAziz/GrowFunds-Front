import { Component } from '@angular/core';
import { Notification } from 'src/app/models/Notification';
import { PublicNotification } from 'src/app/models/PublicNotification';
import { PrivateNotificationService } from 'src/app/services/private-notification.service';
import { PublicNotificationService } from 'src/app/services/public-notification.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent {
  notifs!:PublicNotification[]
  unread:number=0
  pnotifs!:Notification[]

  constructor(private _service:PublicNotificationService, private _pnotifservice:PrivateNotificationService){}

  ngOnInit(): void {
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
}
