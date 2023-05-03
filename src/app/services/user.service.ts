import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url!: string;
  url!: string;


  constructor(private _service:HttpClient) {
    
    this.api_url = environment.apiserver;
   }
   getUserForAdmin(): Observable<User[]> {
    this.url = this.api_url + "/admin/users";
    return this._service.get<User[]>(this.url);

}
getAgentForAdmin(): Observable<User[]> {
  this.url = this.api_url + "/admin/agents";
  return this._service.get<User[]>(this.url);

}
getAdminForAdmin(): Observable<User[]> {
  this.url = this.api_url + "/admin/admins";
  return this._service.get<User[]>(this.url);

}
getClientForAdmin(): Observable<User[]> {
  this.url = this.api_url + "/admin/clients";
  return this._service.get<User[]>(this.url);

}

getUserDetailsForAdmin(id: number): Observable<User> {
  this.url = this.api_url + "/admin/users/u/" + id;
  return this._service.get<User>(this.url);
}
getCurrentUser(): Observable<User> {
  this.url = this.api_url + "/admin/currentUsers" ;
  return this._service.get<User>(this.url);
}
deleteUser(u:User){
  this.url=this.api_url+"/admin/users/delete/"+u.id;
  return this._service.delete(this.url);
}
updateUserByAdmin(user:User): Observable<User>  {

  this.url = this.api_url + "/admin/users/edit/" + user.id;
  return this._service.put<User>(this.url, user);
  
}

}
