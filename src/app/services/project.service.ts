import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/Projects';
import { Revenue } from '../models/Revenue';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  api_url!: string;
  url!: string;
  constructor(private _http: HttpClient) {
    this.api_url = environment.apiserver;
  }

  //client
  getProjectsForClient(): Observable<Projects[]> {
    this.url = this.api_url + "/client/projects";
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
    this.url = this.api_url + "/client/project/add";
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
