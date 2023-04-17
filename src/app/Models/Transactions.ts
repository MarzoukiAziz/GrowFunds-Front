import { Account } from './Account';
import { Typetrans } from './Typetrans';
import { Category } from './Category';

export class Transactions {
  idTrans!: number;
  transactionDate!: Date;
  ribsource!: number;
  ribrecipient!: number;
  amount!: number;
  typetrans!: Typetrans;
  category!: Category;
  accountList!: Account[];
  account!: Account;
}
