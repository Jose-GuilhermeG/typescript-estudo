import { CartItem } from "../interfaces/CarItem";

export class ShoppingCart {
    private readonly _items:  Array<CartItem> = [];

    public addItem(item : CartItem) : void{
        this._items.push(item);
    }

    public removeItem(index : number) : void {
        this._items.splice(index , 1);
    }

    public get items() : Readonly<Array<CartItem>>{
        return this._items
    }

    public total() : number {
        return Number(this._items.reduce((total , currentItem )=>total + currentItem.price , 0).toFixed(2))
    }

    public isEmpty() : boolean{
        return this._items.length == 0
    }
    
    public clear() : void{
        console.log("carrinho limpo")
        this._items.length = 0
    }

}

