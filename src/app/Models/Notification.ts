import { TypeNotificationSection } from "./TypeNotificationSection";
import { TypeNotificationStatus } from "./TypeNotificationStatus";
import { User } from "./User";

export class Notification {
    idNotification!: number;
    user!: User;
    message!: string;
    sentDate!: Date;
    status!: TypeNotificationStatus;
    section!: TypeNotificationSection;
  }