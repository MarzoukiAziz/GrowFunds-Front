import { ComplaintResponse } from './ComplaintResponse';
import { TypeComplaintStatus } from './TypeComplaintStatus';
import { TypePriorityLevel } from './TypePriorityLevel';
import { User } from './User';

export class Complaint {
  idComplaint!: number;
  user!: User;
  priorityLevel!: TypePriorityLevel;
  status!: TypeComplaintStatus;
  objet!: string;
  description!: string;
  dateComplaint!: Date;
  responses!: ComplaintResponse[];
}
