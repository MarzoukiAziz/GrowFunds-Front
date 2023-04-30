import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from '../models/Notification';

@Injectable({
  providedIn: 'root'
})
export class PrivateNotificationService {

  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }
  //Admin
  getNotifAdmin(): Observable<Notification[]> {
    this.url = this.api_url + "/admin/notifications";
    return this._http.get<Notification[]>(this.url);
  }

  getNotifClientAdmin(id:number): Observable<Notification[]> {
    this.url = this.api_url + "/admin/notifications/u/"+id;
    return this._http.get<Notification[]>(this.url);
  }
  deleteNotification(pnid: number): Observable<Notification[]> {
    this.url = this.api_url + "/admin/notifications/n/" + pnid + "/delete";
    console.log(this.url)
    return this._http.delete<Notification[]>(this.url);
  }
  addPNnow(pn: Notification,uid:number): Observable<Notification[]> {
    this.url = this.api_url + "/admin/addInstantNotification/"+uid;
    return this._http.post<Notification[]>(this.url, pn);
  }
  addPNlater(pn: Notification,uid:number): Observable<Notification[]> {
    this.url = this.api_url + "/admin/addScheduledNotification/"+uid;
    return this._http.post<Notification[]>(this.url, pn);
  }
  updateNotification(pn: Notification): Observable<Notification[]> {
    this.url = this.api_url + "/admin/notifications/edit";
    return this._http.put<Notification[]>(this.url, pn);
  }


  //client
  getNotifsForClient(): Observable<Notification[]> {
    this.url = this.api_url + "/client/notifications/";
    return this._http.get<Notification[]>(this.url);
  }

  readNotification(id:number) {
    this.url = this.api_url + "/client/notifications/read/"+id;
    return this._http.put(this.url,{});
  }
}
