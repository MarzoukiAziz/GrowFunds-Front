import { Component } from '@angular/core';
import { PublicNotification } from 'src/app/models/PublicNotification';
import { PublicNotificationService } from 'src/app/services/public-notification.service';

@Component({
  selector: 'app-public-notification-admin',
  templateUrl: './public-notification-admin.component.html',
  styleUrls: ['./public-notification-admin.component.css']
})
export class PublicNotificationAdminComponent {
  notifs!: PublicNotification[]
  pn: PublicNotification = new PublicNotification()
  pn2: PublicNotification = new PublicNotification()
  dp!: string;


  constructor(private _service: PublicNotificationService) { }

  ngOnInit(): void {
    const notificationsByYear: { [key: string]: number } = {};
    this._service.getPublicNotifForAdmin().subscribe(res => {
      this.notifs = res;
      this.notifs.forEach(notification => {
        const year = notification.sentDate.toString().substring(0, 4);;
        if (!notificationsByYear[year]) {
          notificationsByYear[year] = 1;
        } else {
          notificationsByYear[year]++;
        }
      });
      const dta = document.getElementById("data254") as HTMLParagraphElement;
      dta.textContent=JSON.stringify(notificationsByYear);
    });

  }

  createNow() {
    this._service.addPNnow(this.pn2).subscribe(res => {
      this.notifs = res;
      this.pn2 = new PublicNotification();
    });

  }
  createLater() {
    const input = document.getElementById("date-format") as HTMLInputElement;
    const value = input.value;
    const dateTime = new Date(value);
    this.pn.sentDate = dateTime;
    this._service.addPNlater(this.pn).subscribe(res => {
      this.notifs = res;
      this.pn = new PublicNotification();
    });

  }
  deleteNotif(id: number) {
    this._service.deletePublicNotification(id).subscribe(res => this.notifs = res)
  }

}
