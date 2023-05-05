import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Notification } from 'src/app/models/Notification';
import { TypeNotificationStatus } from 'src/app/models/TypeNotificationStatus';
import { User } from 'src/app/models/User';
import { PrivateNotificationService } from 'src/app/services/private-notification.service';

@Component({
  selector: 'app-notification-pick-user',
  templateUrl: './notification-pick-user.component.html',
  styleUrls: ['./notification-pick-user.component.css']
})
export class NotificationPickUserComponent {
  notifs!: Notification[]
  users!: User[]
  data: { [key: string]: { [key: string]: any } } = {};

  read: number = 0
  constructor(private _service: PrivateNotificationService, private _http: HttpClient) { }

  ngOnInit(): void {
    const url = "http://localhost:1004/admin/clients";
    this._http.get<User[]>(url).subscribe(
      res => {
        this.users = res;
        this.users.forEach(u => {
          this.data[u.id] = {
            "username": u.username,
            "all": 0,
            "ACCOUNT": 0,
            "PROJECT": 0,
            "CREDIT": 0,
            "TRANSACTION": 0,
            "OTHER": 0,
          }
        })
        this._service.getNotifAdmin().subscribe(res => {
          this.notifs = res;
          console.log(this.notifs)
          this.notifs.forEach(u => {
            if (u.status.toString()=="READ")this.read++;
            this.data[u.user.id]["all"]++;
            this.data[u.user.id][u.section.toString()]++;
          })
          console.log(this.data)
        });
      }
    );





  }

}
