import { AccountService } from 'src/app/services/accounts.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stat-client',
  templateUrl: './stat-client.component.html',
  styleUrls: ['./stat-client.component.css']
})
export class StatClientComponent {

  id!: number;
  roa!: number;
  ldr!: number;
  month!: number;
  list!: number[];
  constructor(private router: Router, private service: AccountService) { }

  ngOnInit(): void {


    this.service.getRoa().subscribe(
      res => {
        this.roa = res;
    
        });




  }
  getstatclient(id: number, month: number) {
    this.service.getstatclient(this.id, this.month).subscribe(
      res => {
        console.log(res);
        this.list = res;



      });

  }



}
