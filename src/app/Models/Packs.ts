import { Product } from './Product';
import { User } from './User';

export class Packs {
    idPacks!: number;
    name!: string;
    description!: string;
    category!: string;
    price!: number;
    imgUrl!: string;
    drCode!:String;
    product_pack!: Product[];
    likedByUsers!: User[];
}