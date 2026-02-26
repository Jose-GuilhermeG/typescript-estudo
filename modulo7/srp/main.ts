import { ShoppingCart } from "./entities/shoppingCart";
import { Order } from "./entities/Order";
import { Messaging } from "./interfaces/messaging";
import { Persistency } from "./interfaces/persistency";
import { Product } from "./entities/product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart , messaging , persistency);

shoppingCart.addItem(
    new Product('Camisa' , 49.9)
)
shoppingCart.addItem(
    new Product('Calça' , 59.9)
)
shoppingCart.addItem(
    new Product('Lapis' , 2.9)
)

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()