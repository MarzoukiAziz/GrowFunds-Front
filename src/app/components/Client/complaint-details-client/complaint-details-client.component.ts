import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Complaint } from "src/app/models/Complaint";
import { ComplaintResponse } from "src/app/models/ComplaintResponse";
import { ComplaintService } from "src/app/services/ComplaintService";


@Component({
  selector: 'app-complaint-details-client',
  templateUrl: './complaint-details-client.component.html',
  styleUrls: ['./complaint-details-client.component.css']
})
export class ComplaintDetailsClientComponent {

  complaintid!: number;
  complaint!: Complaint;
  cr: ComplaintResponse = new ComplaintResponse();
  constructor(private _service: ComplaintService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.complaintid = this.route.snapshot.params['id'];
    this._service.getComplaintDetailsForAdmin(this.complaintid).subscribe(res => {
      this.complaint = res;
    });
  }


  addResponse() {
    this.cr.complaint = this.complaint;
    this._service.addResponseClient(this.cr).subscribe(res => this.complaint = res);
  }

}


