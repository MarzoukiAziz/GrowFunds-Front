import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-visitor',
  templateUrl: './footer-visitor.component.html',
  styleUrls: ['./footer-visitor.component.css']
})
export class FooterVisitorComponent {
  test!:boolean;
  ngOnInit(): void {
    this.test = false;}
  showMap(){
    this.test=true;
  }

}
