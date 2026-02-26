export interface CartItem{
    name : string ;
    price : number;
} 

export type OrderStatus = 'open' | 'closed'

export class ShoppingCart {
    private readonly _items:  Array<CartItem> = [];
    private _orderStatus : OrderStatus = 'open';

    public addItem(item : CartItem) : void{
        this._items.push(item);
    }

    public removeItem(index : number) : void {
        this._items.splice(index , 1);
    }

    public get items() : Readonly<Array<CartItem>>{
        return this._items
    }

    public get orderStatus() : OrderStatus {
        return this._orderStatus
    }

    public total() : number {
        return Number(this._items.reduce((total , currentItem )=>total + currentItem.price , 0).toFixed(2))
    }

    public checkout() : void {
        if(this.isEmpty()){ 
        console.log("Seu carrinho esta vazio")
        return;
        }
        this._orderStatus = 'closed';
        this.sendMessage("Seu pedido foi recebido");
        this.saveOrder();
        this.clear();
    }

    public isEmpty() : boolean{
        return this._items.length == 0
    }

    public sendMessage(msg : string) : void {
        console.log(`mensagem enviada: ${msg}`)
    }

    public saveOrder():void{
        console.log("Pedido salvo com sucesso")
    }
    
    public clear() : void{
        console.log("carrinho limpo")
        this._items.length = 0
    }

}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({
    name : 'Camisa' , price : 49.9
})
shoppingCart.addItem({
    name : 'Calça' , price : 59.9
})
shoppingCart.addItem({
    name : 'Lapis' , price : 2.9
})

console.log(shoppingCart.items)
console.log(shoppingCart.total())
shoppingCart.checkout()