import { User } from './User';
import { Investisment } from './Investisment';
import { TypeProjectStatus } from './TypeProjectStatus';
import { Revenue } from './Revenue';

export class Projects {
  idProject!: number;
  name!: string;
  category!: string;
  budget!: number;
  status!:TypeProjectStatus ;
  founder!: User;
  investisments!: Investisment[];
  revenues!: Revenue[];
}
