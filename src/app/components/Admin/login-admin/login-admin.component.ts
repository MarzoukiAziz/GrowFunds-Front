import { Component } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  loadAPI: Promise<any>;

  constructor() {
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
        '/assets/client/vendor/jquery-autocomplete/jquery-ui.js',
        '/assets/client/js/custom.min.js',
        '/assets/client/js/dlabnav-admin.js'


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
}
