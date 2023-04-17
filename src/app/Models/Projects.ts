import { User } from './User';
import { Investisment } from './Investisment';
import { TypeInvestor } from './TypeInvestor';

export class Projects {
  idProject!: number;
  name!: string;
  type!: string;
  budget!: number;
  user!: User;
  investor!: User;
  investtisment!: Investisment;
  leTypeInvestor!: TypeInvestor;
}
