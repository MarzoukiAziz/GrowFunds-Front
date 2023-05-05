import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ComplaintService {
    api_url!: string;
    url!: string;
    constructor(private _service: HttpClient) {
        this.api_url = environment.apiserver;
    }
    getNearstAgency(latitude: Number,longitude:Number): Observable<Location> {
        this.url = this.api_url + "/getClosestAgency/"+latitude+"/"+longitude;
        return this._service.get<Location>(this.url);
    }
    
   
}