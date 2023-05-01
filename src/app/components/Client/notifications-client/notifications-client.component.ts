import { Component } from '@angular/core';
import { Notification } from 'src/app/models/Notification';
import { TypeNotificationStatus } from 'src/app/models/TypeNotificationStatus';
import { PrivateNotificationService } from 'src/app/services/private-notification.service';

@Component({
  selector: 'app-notifications-client',
  templateUrl: './notifications-client.component.html',
  styleUrls: ['./notifications-client.component.css']
})
export class NotificationsClientComponent {
  notifs!:Notification[]
  constructor(private _service:PrivateNotificationService){}
  ngOnInit(): void {

    this._service.getNotifsForClient().subscribe(res => {
      this.notifs = res;
      this.notifs.forEach(n=>{
        if (n.status.toString()=="UNREAD"){
          n.status=TypeNotificationStatus.READ;
          this._service.readNotification(n.idNotification).subscribe();
        }
      })
    });

  }

}
