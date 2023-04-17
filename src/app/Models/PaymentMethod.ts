import { Account } from "./Account";
import { TypePayment } from "./TypePayment";

export class PaymentMethod {
    idPaymentMethod!: number;
    typePayment!: TypePayment;
    typeCarte!: string;
    typeCheque!: string;
    account!: Account;
  }
  