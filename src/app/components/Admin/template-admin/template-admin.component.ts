import { Component } from '@angular/core';

@Component({
  selector: 'app-template-admin',
  templateUrl: './template-admin.component.html',
  styleUrls: ['./template-admin.component.css']
})
export class TemplateAdminComponent {
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
        '/assets/client/vendor/chart.js/Chart.bundle.min.js',
        '/assets/client/vendor/jquery-nice-select/js/jquery.nice-select.min.js',
        '/assets/client/vendor/apexchart/apexchart.js',
        '/assets/client/vendor/peity/jquery.peity.min.js',
        '/assets/client/vendor/chartist/js/chartist.min.js',
        '/assets/client/vendor/jquery-autocomplete/jquery-ui.js',
        '/assets/client/js/dashboard/dashboard-1.js',
       
        '/assets/client/vendor/datatables/js/jquery.dataTables.min.js',
        '/assets/client/js/plugins-init/datatables.init.js',
        
        "/assets/client/vendor/raphael/raphael.min.js",
        "/assets/client/vendor/morris/morris.min.js",
        "/assets/client/js/plugins-init/morris-init.js",
        "/assets/client/vendor/toastr/js/toastr.min.js",
        "/assets/client/vendor/bootstrap-select/dist/js/bootstrap-select.min.js",
        "/assets/client/js/plugins-init/toastr-init.js",
        "/assets/client/vendor/moment/moment.min.js",
        "/assets/client/vendor/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js",
        "/assets/client/js/plugins-init/material-date-picker-init.js",
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
