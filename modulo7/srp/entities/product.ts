import { CartItem } from "../interfaces/CarItem";

export class Product implements CartItem {
    constructor(public name : string , public price : number){}
}