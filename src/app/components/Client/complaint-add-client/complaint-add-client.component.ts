import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/models/Complaint';
import { ComplaintService } from 'src/app/services/ComplaintService';

@Component({
  selector: 'app-complaint-add-client',
  templateUrl: './complaint-add-client.component.html',
  styleUrls: ['./complaint-add-client.component.css']
})
export class ComplaintAddClientComponent {

  c: Complaint = new Complaint();
  constructor(private router: Router, private _service: ComplaintService) {
  }

  ngOnInit(): void {}

  addComplaint() {
    this._service.addComplaintClient(this.c).subscribe(
      res => this.router.navigate(['/client/complaints']).then(() => {
        window.location.reload();
      }));
  }
}
