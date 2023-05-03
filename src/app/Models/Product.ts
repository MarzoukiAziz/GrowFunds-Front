import { FileHandle } from "./file-handle.model";

export class Product {
    idProduct!: number;
    nameProdcut!: string;
    priceProduct!: number;
    quantity!: number;
    details!:string;
    image!:FileHandle[];
    
  }
  