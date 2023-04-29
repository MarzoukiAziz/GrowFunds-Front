import { Component } from '@angular/core';
import { PublicNotification } from 'src/app/models/PublicNotification';
import { PublicNotificationService } from 'src/app/services/public-notification.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent {
  notifs!:PublicNotification[]

  constructor(private _service:PublicNotificationService){}

  ngOnInit(): void {
    this._service.getPublicNotifForClient().subscribe(res => {
      this.notifs = res;
    });

  }
}
