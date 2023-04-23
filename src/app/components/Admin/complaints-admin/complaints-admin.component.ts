import { Component } from '@angular/core';
import { Complaint } from 'src/app/models/Complaint';
import { TypeComplaintStatus } from 'src/app/models/TypeComplaintStatus';
import { TypePriorityLevel } from 'src/app/models/TypePriorityLevel';
import { ComplaintService } from 'src/app/services/ComplaintService';

@Component({
  selector: 'app-complaints-admin',
  templateUrl: './complaints-admin.component.html',
  styleUrls: ['./complaints-admin.component.css']
})
export class ComplaintsAdminComponent {

  complaints!: Complaint[];
  newComplaints!:number;
  inprogessComplaints!:number;
  resolvesComplaints!:number;
  closedComplaints!:number;
  constructor(private _service: ComplaintService) { }


  ngOnInit(): void {
    this._service.getComplaintsForAdmin().subscribe(res => {
      this.complaints = res;
      this.newComplaints = this.complaints.filter(c => c.status.toString()=='NEW').length;
      this.inprogessComplaints = this.complaints.filter(c =>  c.status.toString()=='IN_PROGRESS').length;
      this.resolvesComplaints = this.complaints.filter(c => c.status.toString()=='RESOLVED').length;
      this.closedComplaints = this.complaints.filter(c =>  c.status.toString()=='CLOSED').length;

    });

  }
}
