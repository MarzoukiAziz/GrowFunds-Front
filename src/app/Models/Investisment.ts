import { User } from "./User";
import { TypeInvestor } from "./TypeInvestor";
export class Investisment {
    idinvesttisment!: number;
    TauxInvesttisment!: number;
    amount!: number;
    investor!: User;
    leTypeInvestor!: TypeInvestor;
  }