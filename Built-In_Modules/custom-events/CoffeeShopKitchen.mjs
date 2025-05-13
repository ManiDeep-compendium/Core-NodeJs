import EventEmitter from "events"

export default class CoffeeShopKitchen extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  orderCoffee(type,...customizations) {
    this.orderNumber++;
    this.emit("order",type,customizations?.toString());
  }

  displayOrderNumber() {
    
console.log(`Your Order Number Is ${this.orderNumber}`);
  }
}