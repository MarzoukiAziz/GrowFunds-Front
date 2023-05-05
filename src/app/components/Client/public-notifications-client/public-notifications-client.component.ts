import { Component } from '@angular/core';
import { PublicNotification } from 'src/app/models/PublicNotification';
import { PublicNotificationService } from 'src/app/services/public-notification.service';

@Component({
  selector: 'app-public-notifications-client',
  templateUrl: './public-notifications-client.component.html',
  styleUrls: ['./public-notifications-client.component.css']
})
export class PublicNotificationsClientComponent {
  notifs!:PublicNotification[]

  constructor(private _service:PublicNotificationService){}

  ngOnInit(): void {
    this._service.getPublicNotifForClient().subscribe(res => {
      this.notifs = res;
      console.log(this.notifs)
    });

  }
}
