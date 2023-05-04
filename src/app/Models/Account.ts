import { User } from './User';
import { Credits } from './Credits';
import { PaymentMethod } from './PaymentMethod';
import { Transactions } from './Transactions';
import { TypeAccount } from './TypeAccount';


export class Account {
accountNum!: number;
cin!: number;
state!: boolean;
typeAcc!: TypeAccount;
solde!: number;
rib!: number;
date!: Date;
user!: User;
creditsList!: Credits[];
paymentMethodList!: PaymentMethod[];
virement!: Transactions[];
Versement!: Transactions[];
}
