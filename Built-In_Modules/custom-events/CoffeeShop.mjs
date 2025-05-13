import CoffeeShopKitchen from './CoffeeShopKitchen.mjs';
import SnacksOrder from './SnacksOrder.mjs';

const kitchen = new CoffeeShopKitchen();
const snacks = new SnacksOrder();


kitchen.on("order",(type,customizations)=>{
  console.log(`Your ${type} order was placed with ${customizations} :) `)
  snacks.serveSnacks(type);
})

kitchen.orderCoffee("cappuccino","strong","extra sugar");
kitchen.displayOrderNumber();

