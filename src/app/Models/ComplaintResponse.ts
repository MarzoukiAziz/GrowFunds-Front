import { Complaint } from "./Complaint";
import { User } from "./User";

export class ComplaintResponse {
    idResponse!: number;
    user!: User;
    description!: string;
    dateResponse!: Date;
    complaint!: Complaint;
  }
  