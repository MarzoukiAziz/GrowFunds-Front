import { Packs } from './Packs';
import { Role } from './Role';
import { Account } from './Account';
import { Projects } from './Projects';
import { Investisment } from './Investisment';
import { Complaint } from './Complaint';
import { Credits } from './Credits';


export class User {
    id!: number;
    username!: string;
    cin!: string;
    birthDate!: Date;
    createdDate!: Date;
    phoneNum!: number;
    email!: string;
    address!: string;
    salary!: number;
    investmentAmount!: number;
    relationWithClient!: string;
    profession!: string;
    newQuestions!: string;
    typeProjets!: string;
    theuserNumber!: string;
    likedPackages!: Packs[];
    password!: string;
    role!: Role[];
    accountList!: Account[];
    projectsList!: Projects[];
    investtismentList!: Investisment[];
    complaintList!: Complaint[];
    creditGuarant!: Credits;
    projectsListI!: Investisment[];
}
