import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/Projects';
import { Revenue } from '../models/Revenue';
import {TokenStorageService} from "./token";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient,private _tok:TokenStorageService) {
    this.api_url = environment.apiserver;
  }

  //client
  getProjectsForClient(): Observable<Projects[]> {
    const cid=this._tok.getUser().id;

    this.url = this.api_url + "/client/projects/client/"+cid;
    return this._http.get<Projects[]>(this.url);
  }
  getAllForClient(): Observable<Projects[]> {
    this.url = this.api_url + "/client/allprojects";
    return this._http.get<Projects[]>(this.url);
  }
  getProjectForClient(id:number): Observable<Projects> {
    this.url = this.api_url + "/client/project/"+id;
    return this._http.get<Projects>(this.url);
  }
  addRevnue(r:Revenue,id:number){
    this.url = this.api_url + "/client/project/"+id+"/addRevenue";
    return this._http.post<Projects>(this.url,r);
  }

  addProject(p:Projects){
    const cid=this._tok.getUser().id;
    this.url = this.api_url + "/client/project/add/client/"+cid;
    return this._http.post<Projects>(this.url,p);
  }
  //admin
  getProjectsForAdmin(): Observable<Projects[]> {
    this.url = this.api_url + "/admin/projects";
    return this._http.get<Projects[]>(this.url);
  }

  updateProjectStatus(p:Projects): Observable<Projects> {
    this.url = this.api_url + "/admin/projects/edit";
    return this._http.put<Projects>(this.url,p);
  }

}
