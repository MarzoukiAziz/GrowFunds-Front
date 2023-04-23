import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/models/Complaint';
import { ComplaintResponse } from 'src/app/models/ComplaintResponse';
import { TypeComplaintStatus } from 'src/app/models/TypeComplaintStatus';
import { TypePriorityLevel } from 'src/app/models/TypePriorityLevel';
import { ComplaintService } from 'src/app/services/ComplaintService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-complaint-details-admin',
  templateUrl: './complaint-details-admin.component.html',
  styleUrls: ['./complaint-details-admin.component.css']
})
export class ComplaintDetailsAdminComponent {

  complaintid!: number;
  complaint!: Complaint;
  cr: ComplaintResponse = new ComplaintResponse();
  constructor(private router: Router, private _service: ComplaintService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.complaintid = this.route.snapshot.params['id'];
    this._service.getComplaintDetailsForAdmin(this.complaintid).subscribe(res => {
      this.complaint = res;
    });
  }

  updateComplaint(priority: number, status: Number) {
    switch (priority) {
      case 0:
        this.complaint.priorityLevel = TypePriorityLevel.LOW
        break;
      case 1:
        this.complaint.priorityLevel = TypePriorityLevel.MEDIUM
        break;
      case 2:
        this.complaint.priorityLevel = TypePriorityLevel.HIGH
        break;

    }
    switch (status) {
      case 0:
        this.complaint.status = TypeComplaintStatus.NEW
        break;
      case 1:
        this.complaint.status = TypeComplaintStatus.IN_PROGRESS
        break;
      case 2:
        this.complaint.status = TypeComplaintStatus.RESOLVED
        break;
      case 3:
        this.complaint.status = TypeComplaintStatus.CLOSED
        break;

    }
    this._service.updateComplaintByAdmin(this.complaint).subscribe(res => this.complaint = res);
  }
  addResponse() {
    this.cr.complaint = this.complaint;
    this._service.addResponse(this.cr).subscribe(res => this.complaint = res);
  }
  deleteResponse(crd: ComplaintResponse) {
    this._service.deleteResponse(crd).subscribe(res => this.complaint = res);
  }

  deleteComplaint() {
    this._service.deleteComplaint(this.complaint).subscribe(
      res => this.router.navigate(['/admin/complaints']).then(() => {
        window.location.reload();
      }));
  }

  askAIForPriority() {
    this._service.askAIforPriority(this.complaint).subscribe(res => {
      const p = document.getElementById("aipriortyresponse") as HTMLParagraphElement;
      p.innerText = "Suggestion : " + res;
    });
  }

  translate() {
    this._service.translateComplaint(this.complaint).subscribe(res => {
      const h = document.getElementById("resultTitle") as HTMLHeadingElement;
      h.innerText = "Translation : ";
      const p = document.getElementById("resultText") as HTMLParagraphElement;
      p.innerText = res;
    });
  }

  summarize() {
    this._service.summarizeComplaint(this.complaint).subscribe(res => {
      const h = document.getElementById("resultTitle") as HTMLHeadingElement;
      h.innerText = "Symmary : ";
      const p = document.getElementById("resultText") as HTMLParagraphElement;
      p.innerText = res;
    });
  }

}
