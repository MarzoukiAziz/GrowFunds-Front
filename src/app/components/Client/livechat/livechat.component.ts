import { Component } from '@angular/core';
import { LivechatService } from 'src/app/services/livechat.service';

@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.component.html',
  styleUrls: ['./livechat.component.css']
})
export class LivechatComponent {

  messages:string[]=[];

  constructor(private _service:LivechatService){}

  addMessage(){
    const c = document.getElementById("comment") as HTMLInputElement;
    const q= c.value;
    this.messages.push("You : " +q)
    c.value=""
    this._service.askAi(q).subscribe(res=>{
      this.messages.push("GoGo : "+res)
    })
  }
}
