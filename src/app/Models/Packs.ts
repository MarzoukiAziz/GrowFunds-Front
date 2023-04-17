import { Credits } from './Credits';
import { Product } from './Product';
import { User } from './User';

export class Packs {
    idPack!: number;
    name!: string;
    typepack!: string;
    descriptionpack!: string;
    price!: number;
    creditsList!: Credits[];
    product_pack!: Product[];
    likedByUsers!: User[];
}