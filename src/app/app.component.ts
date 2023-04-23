import { Component } from '@angular/core';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'GrowFunds-Front';
  api_url="http://localhost:1004/";
}
