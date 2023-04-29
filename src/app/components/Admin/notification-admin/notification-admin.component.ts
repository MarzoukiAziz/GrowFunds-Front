import { Component } from '@angular/core';
import { Notification } from 'src/app/models/Notification';
import { PrivateNotificationService } from 'src/app/services/private-notification.service';

@Component({
  selector: 'app-notification-admin',
  templateUrl: './notification-admin.component.html',
  styleUrls: ['./notification-admin.component.css']
})
export class NotificationAdminComponent {
  notifs!:Notification[]
  pn:Notification=new Notification()

  constructor(private _service:PrivateNotificationService){}

  ngOnInit(): void {
    this._service.getNotifAdmin().subscribe(res => {
      this.notifs = res;
    });

  }
  createNow(){
    this._service.addPNnow(this.pn).subscribe(res => {
      this.notifs = res;
    });

  }
  createLater(){

    this._service.addPNlater(this.pn).subscribe(res => {
      this.notifs = res;
    });

  }
  deleteNotif(id:number){
    this._service.deleteNotification(id).subscribe(res=>this.notifs=res)
  }
}
