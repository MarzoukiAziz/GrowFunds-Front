import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Complaint } from '../models/Complaint';
import { ComplaintResponse } from '../models/ComplaintResponse';


@Injectable({
    providedIn: 'root'
})
export class ComplaintService {
    api_url!: string;
    url!: string;
    constructor(private _http: HttpClient) {
        this.api_url = environment.apiserver;
    }
    //Admin
    getComplaintsForAdmin(): Observable<Complaint[]> {
        this.url = this.api_url + "/admin/complaints";
        return this._http.get<Complaint[]>(this.url);
    }
    getComplaintDetailsForAdmin(id: number): Observable<Complaint> {
        this.url = this.api_url + "/admin/complaints/c/" + id;
        return this._http.get<Complaint>(this.url);
    }
    updateComplaintByAdmin(complaint:Complaint): Observable<Complaint>  {

        this.url = this.api_url + "/admin/complaints/edit/" + complaint.idComplaint;
        return this._http.put<Complaint>(this.url, complaint);

    }
    askAIforPriority(complaint:Complaint){
        this.url=this.api_url+"/admin/complaints/priority/"+complaint.idComplaint+"/";
        return  this._http.get(this.url, { responseType: 'text' });
    }
    summarizeComplaint(complaint:Complaint){
        this.url=this.api_url+"/admin/complaints/c/"+complaint.idComplaint+"/summarize";
        return  this._http.get(this.url, { responseType: 'text' });
    }
    translateComplaint(complaint:Complaint){
        this.url=this.api_url+"/admin/complaints/c/"+complaint.idComplaint+"/translate";
        return  this._http.get(this.url, { responseType: 'text' });
    }
    addResponse(cr:ComplaintResponse):Observable<Complaint>{
        this.url=this.api_url+"/admin/complaints/c/"+cr.complaint.idComplaint+"/addResponse";
        return  this._http.post<Complaint>(this.url, cr);
    }
    deleteResponse(cr:ComplaintResponse):Observable<Complaint>{
        this.url=this.api_url+"/admin/responses/delete/"+cr.idResponse;
        return  this._http.delete<Complaint>(this.url);
    }
    deleteComplaint(c:Complaint){
        this.url=this.api_url+"/admin/complaints/delete/"+c.idComplaint;
        return this._http.delete(this.url);
    }

    //Client
    getComplaints(): Observable<Complaint[]> {
        this.url = this.api_url + "/client/complaints";
        return this._http.get<Complaint[]>(this.url);
    }
    getComplaintDetails(id: number): Observable<Complaint> {
        this.url = this.api_url + "/client/complaints/c/" + id;
        return this._http.get<Complaint>(this.url);
    }

    addResponseClient(cr:ComplaintResponse):Observable<Complaint>{
        this.url=this.api_url+"/client/complaints/c/"+cr.complaint.idComplaint+"/addResponse";
        return  this._http.post<Complaint>(this.url, cr);
    }
    addComplaintClient(c:Complaint):Observable<Complaint>{
        this.url=this.api_url+"/client/complaints/add";
        return  this._http.post<Complaint>(this.url, c);
    }
}
