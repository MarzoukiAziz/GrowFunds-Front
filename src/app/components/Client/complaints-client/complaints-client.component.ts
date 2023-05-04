import { Component } from '@angular/core';
import { Complaint } from 'src/app/models/Complaint';
import { ComplaintService } from 'src/app/services/ComplaintService';

@Component({
  selector: 'app-complaints-client',
  templateUrl: './complaints-client.component.html',
  styleUrls: ['./complaints-client.component.css']
})
export class ComplaintsClientComponent {
  complaints!: Complaint[];
  constructor(private _service: ComplaintService) { }


  ngOnInit(): void {
    this._service.getComplaints().subscribe(res => {
      this.complaints = res;

    });

  }
}
