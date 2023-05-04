import { TypeCredit } from './TypeCredit';
import { Account } from './Account';
import { Packs } from './Packs';
import { MonthlyPayment } from './MonthlyPayment';
import { User } from './User';


export class Credits {
  idCredit!: number;
  amount!: number;
  dateDebut!: Date;
  dateFin!: Date;
  paymentMounthly!: number;
  interestRate!: number;
  status!: string;
  typeCredit!: TypeCredit;
  judgment!: string;
  checkingAccount!: number;
  Duration!: number;
  creditHistory!: number;
  purpose!: number;
  bondsStatus!: number;
  employmentYears!: number;
  installmentRate!: number;
  statusAndSex!: number;
  gurantOrCoapplicant!: number;
  residenceSince!: number;
  property!: number;
  age!: number;
  otherPlans!: number;
  housing!: number;
  numOfExistingCredits!: number;
  job!: number;
  account!: Account;
  packsList!: Packs[];
  monthlyPaymentList!: MonthlyPayment[];
  guarant!: User;
}
