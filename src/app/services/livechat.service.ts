import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivechatService {
  api_url!: string;
    url!: string;
    constructor(private _http: HttpClient) {
        this.api_url = environment.apiserver;
    }

  askAi(question:string){
    this.url=this.api_url+"/admin/livechat/"+question;
    return  this._http.get(this.url, { responseType: 'text' });
}
}
