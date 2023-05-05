import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'src/assets/client/vendor/bootstrap-datetimepicker/js/moment';
import { environment } from 'src/environments/environment';
import { PublicNotification } from '../models/PublicNotification';
import {TokenStorageService} from "./token";

@Injectable({
  providedIn: 'root'
})
export class PublicNotificationService {

  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient,private _tok:TokenStorageService) {
    this.api_url = environment.apiserver;
  }
  //Admin
  getPublicNotifForAdmin(): Observable<PublicNotification[]> {
    this.url = this.api_url + "/admin/publicnotif";
    return this._http.get<PublicNotification[]>(this.url);
  }
  deletePublicNotification(pnid: number): Observable<PublicNotification[]> {
    this.url = this.api_url + "/admin/publicnotif/n/" + pnid + "/delete";
    return this._http.delete<PublicNotification[]>(this.url);
  }
  addPNnow(pn: PublicNotification): Observable<PublicNotification[]> {
    this.url = this.api_url + "/admin/addInstantPublicNotifi";
    return this._http.post<PublicNotification[]>(this.url, pn);
  }
  addPNlater(pn: PublicNotification): Observable<PublicNotification[]> {
    console.log(pn)
    this.url = this.api_url + "/admin/addScheduledPublicNotif";
    return this._http.post<PublicNotification[]>(this.url, pn);
  }


  //client
  getPublicNotifForClient(): Observable<PublicNotification[]> {
    const cid=this._tok.getUser().id;
    this.url = this.api_url + "/client/publicnotif/client/"+cid;
    return this._http.get<PublicNotification[]>(this.url);
  }
}
