import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-template-client',
  templateUrl: './template-client.component.html',
  styleUrls: ['./template-client.component.css']
})


export class TemplateClientComponent {

  loadAPI: Promise<any>;
  showNotification = false;
  notificationMessage = '';
  notificationTitle = "";
  notificationColor = ""
  name!: string;
  webSocketEndPoint: string = environment.apiserver + '/our-websocket';
  topic: string = "/user/topic/private-messages";
  stompClient: any;


  constructor(private cdRef: ChangeDetectorRef) {
    this._connect()
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();

      resolve(true);
    });
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")

    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src')!.includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        '/assets/client/vendor/global/global.min.js',
        '/assets/client/vendor/chart.js/Chart.bundle.min.js',
        '/assets/client/vendor/jquery-nice-select/js/jquery.nice-select.min.js',
        '/assets/client/vendor/apexchart/apexchart.js',
        '/assets/client/vendor/peity/jquery.peity.min.js',
        '/assets/client/vendor/chartist/js/chartist.min.js',
        '/assets/client/vendor/jquery-autocomplete/jquery-ui.js',


        '/assets/client/vendor/datatables/js/jquery.dataTables.min.js',

        '/assets/client/vendor/jquery-autocomplete/jquery-ui.js',
        "/assets/client/vendor/toastr/js/toastr.min.js",
        '/assets/client/js/dashboard/dashboard-1.js',
        "/assets/client/js/plugins-init/toastr-init.js",
        '/assets/client/js/plugins-init/datatables.init.js',
        '/assets/client/js/custom.min.js',
        '/assets/client/js/dlabnav-init.js'


      ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }


    }


  }


  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame: any) {
      _this.stompClient.subscribe("/topic/messages", function (sdkEvent: any) {
        _this.onPublicMessageReceived(sdkEvent);
      });
      _this.stompClient.subscribe("/user/topic/private-messages", function (sdkEvent: any) {
        _this.onPrivateMessageReceived(sdkEvent);
      });
      _this.stompClient.reconnect_delay = 2000;
    }, this.errorCallBack);
  };

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  errorCallBack(error: any) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this._connect();
    }, 5000);
  }


  onPublicMessageReceived(message: any) {
    console.log("Message Recieved from Server :: " + JSON.parse(message.body).content);
    this.handlePublicMessage(JSON.parse(message.body).content);
  }
  onPrivateMessageReceived(message: any) {
    console.log("Message Recieved from Server :: " + JSON.parse(message.body).content);
    this.handlePrivateMessage(JSON.parse(message.body).content);
  }

  
  handlePublicMessage(message: any) {
    this.notificationMessage = message;
    this.notificationTitle = "Notification Publique!"
    this.showNotification = true;
    this.notificationColor = "#1EAE7A"
    this.cdRef.detectChanges();
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
      this.cdRef.detectChanges();
    }, 5000);


    this.cdRef.detectChanges();

  }
  handlePrivateMessage(message: any) {
    this.notificationMessage = message;
    this.notificationTitle = "Notification Privé!"
    this.notificationColor = "#311898"
    this.showNotification = true;
    this.cdRef.detectChanges();
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
      this.cdRef.detectChanges();
    }, 5000);


    this.cdRef.detectChanges();

  }

}
