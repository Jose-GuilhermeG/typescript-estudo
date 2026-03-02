import { CustomerOrder } from "../interfaces/Customer";
import { OrderStatus } from "../interfaces/OrderStatus";
import { Messaging } from "../interfaces/messaging";
import { Persistency } from "../interfaces/persistency";
import { ShoppingCart } from "./shoppingCart";


export class Order {
    private _orderStatus : OrderStatus = 'open';
    private shoppingCart : ShoppingCart;
    private messaging : Messaging;
    private persistency : Persistency;
    private readonly customer : CustomerOrder;

    constructor(shoppingCart : ShoppingCart , messaging : Messaging , persistency : Persistency , customer : CustomerOrder){
        this.shoppingCart = shoppingCart;
        this.messaging = messaging
        this.persistency = persistency;
        this.customer = customer
    }

    public get orderStatus() : OrderStatus {
        return this._orderStatus
    }

     public checkout() : void {
        if(this.shoppingCart.isEmpty()){ 
        console.log("Seu carrinho esta vazio")
        return;
        }
        this._orderStatus = 'closed';
        this.messaging.sendMessage("Seu pedido foi recebido");
        this.persistency.saveOrder();
        this.shoppingCart.clear();
        console.log(`O cliente é: ${this.customer.getName()} , ${this.customer.getIDN()}`)
    }

}