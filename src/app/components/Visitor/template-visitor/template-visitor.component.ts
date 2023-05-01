import { Component } from '@angular/core';
@Component({
  selector: 'app-template-visitor',
  templateUrl: './template-visitor.component.html',
  styleUrls: ['./template-visitor.component.css']
})
export class TemplateVisitorComponent {





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
        "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js",
        '/assets/visitor/vendors/jquery/jquery-3.6.0.min.js',
        '/assets/visitor/vendors/bootstrap/js/bootstrap.bundle.min.js',
        '/assets/visitor/vendors/bxslider/jquery.bxslider.min.js',
        '/assets/visitor/vendors/circleType/jquery.circleType.js',
        '/assets/visitor/vendors/circleType/jquery.lettering.min.js',
        '/assets/visitor/vendors/isotope/isotope.js',
        '/assets/visitor/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js',
        '/assets/visitor/vendors/jquery-appear/jquery.appear.min.js',
        '/assets/visitor/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js',
        '/assets/visitor/vendors/jquery-migrate/jquery-migrate.min.js',
        '/assets/visitor/vendors/jquery-ui/jquery-ui.js',
        '/assets/visitor/vendors/jquery-validate/jquery.validate.min.js',
        '/assets/visitor/vendors/nice-select/jquery.nice-select.min.js',
        '/assets/visitor/vendors/odometer/odometer.min.js',
        '/assets/visitor/vendors/owl-carousel/owl.carousel.min.js',
        '/assets/visitor/vendors/swiper/swiper.min.js',
        '/assets/visitor/vendors/vegas/vegas.min.js',
        '/assets/visitor/vendors/wnumb/wNumb.min.js',
        '/assets/visitor/vendors/wow/wow.js',
        '/assets/visitor/vendors/extra-scripts/jquery.paroller.min.js',
        '/assets/visitor/vendors/language-switcher/jquery.polyglot.language.switcher.js',
        '/assets/visitor/vendors/extra-scripts/pagenav.js',
        '/assets/visitor/vendors/extra-scripts/product-filter.js',
        '/assets/visitor/vendors/round-progress-bar/knob.js',
        '/assets/visitor/vendors/aos/aos.js',
        '/assets/visitor/js/custom.js'
        

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
