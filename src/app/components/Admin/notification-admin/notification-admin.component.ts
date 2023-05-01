import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from 'src/app/models/Notification';
import { PrivateNotificationService } from 'src/app/services/private-notification.service';
import { TypeNotificationSection } from 'src/app/models/TypeNotificationSection';
import { TypeNotificationStatus } from 'src/app/models/TypeNotificationStatus';
@Component({
  selector: 'app-notification-admin',
  templateUrl: './notification-admin.component.html',
  styleUrls: ['./notification-admin.component.css']
})
export class NotificationAdminComponent {
  notifs!: Notification[]
  userid!: number;
  n: Notification = new Notification()
  n2: Notification = new Notification()
  read:number=0
  ntoupdate:Notification=new Notification()

  constructor(private _service: PrivateNotificationService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];

    this._service.getNotifClientAdmin(this.userid).subscribe(res => {
      this.notifs = res;
      this.notifs.forEach(x=>{
        if (x.status.toString()=="READ")this.read++;
      })
    });

  }
  createNow() {
    const selectElement = document.getElementById("sec") as HTMLSelectElement;
    const selectedValue = selectElement.value;

    switch (selectedValue) {
      case "ACCOUNT":
        this.n.section = TypeNotificationSection.ACCOUNT
        break;
      case "CREDIT":
        this.n.section = TypeNotificationSection.CREDIT
        break;
      case "PROJECT":
        this.n.section = TypeNotificationSection.PROJECT
        break;
      case "TRANSACTION":
        this.n.section = TypeNotificationSection.TRANSACTION
        break;
      case "OTHER":
        this.n.section = TypeNotificationSection.OTHER
        break;

    }

    this._service.addPNnow(this.n, this.userid).subscribe(res => {
      this.notifs = res;
      this.n = new Notification();
    });

  }
  createLater() {
    const input = document.getElementById("date-format") as HTMLInputElement;
    const value = input.value;
    const dateTime = new Date(value);
    this.n2.sentDate = dateTime;

    const selectElement = document.getElementById("sec2") as HTMLSelectElement;
    const selectedValue = selectElement.value;

    switch (selectedValue) {
      case "ACCOUNT":
        this.n2.section = TypeNotificationSection.ACCOUNT
        break;
      case "CREDIT":
        this.n2.section = TypeNotificationSection.CREDIT
        break;
      case "PROJECT":
        this.n2.section = TypeNotificationSection.PROJECT
        break;
      case "TRANSACTION":
        this.n2.section = TypeNotificationSection.TRANSACTION
        break;
      case "OTHER":
        this.n2.section = TypeNotificationSection.OTHER
        break;

    }

    this._service.addPNlater(this.n2,this.userid).subscribe(res => {
      this.notifs = res;
      this.n2 = new Notification();
    });

  }
  deleteNotif(id: number) {
    this._service.deleteNotification(id).subscribe(res => this.notifs = res)
  }

  cancel(){
    const selectElement = document.getElementById("editform") as HTMLDivElement;
    selectElement.classList.add("d-none")

  }
  update(){
    const selectElement = document.getElementById("sec3") as HTMLSelectElement;
    const selectedValue = selectElement.value;

    switch (selectedValue) {
      case "ACCOUNT":
        this.ntoupdate.section = TypeNotificationSection.ACCOUNT
        break;
      case "CREDIT":
        this.ntoupdate.section = TypeNotificationSection.CREDIT
        break;
      case "PROJECT":
        this.ntoupdate.section = TypeNotificationSection.PROJECT
        break;
      case "TRANSACTION":
        this.ntoupdate.section = TypeNotificationSection.TRANSACTION
        break;
      case "OTHER":
        this.ntoupdate.section = TypeNotificationSection.OTHER
        break;

    }

    this._service.updateNotification(this.ntoupdate).subscribe(res => {
      this.notifs = res;
      const selectElement = document.getElementById("editform") as HTMLDivElement;
      selectElement.classList.add("d-none")
    });
  }

  openform(c:Notification){
    const selectElement = document.getElementById("editform") as HTMLDivElement;
    selectElement.classList.remove("d-none")
    this.ntoupdate=c;
  }
}
