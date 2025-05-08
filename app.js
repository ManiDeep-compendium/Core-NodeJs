// const addTwonumbers = require('./add');


// const printWishes = (wish) =>{
//   console.log(wish);
// }

// const sum = addTwonumbers(2,2);
// const sum2 = addTwonumbers(2,3);

// console.log(sum);
// console.log(sum2);

// printWishes('Good Morning');


const premiumCars = require('./PremiumCars');

let defaultPremiumCarName = premiumCars.getCarName();

console.log(defaultPremiumCarName);

premiumCars.setCarName('Volvo');

console.log( premiumCars.getCarName());


const premiumCarsTwo = require('./PremiumCars');

console.log(premiumCarsTwo.getCarName());
