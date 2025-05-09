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

let cars = new premiumCars('Austin Martin');

console.log(cars.getCarName());

cars.setCarName('Volvoo');

console.log(cars.getCarName());


const premiumCarsTwo = require('./PremiumCars');
let carTwo = new premiumCarsTwo('Austin Martin');

console.log(carTwo.getCarName());


const utilities = require('./utility');

const {removeDupsinArray,sortArray} = utilities;

console.log(removeDupsinArray([1,2,1,3,4,5,4,6,7,6,8]));

console.log(sortArray([77,88,11,22,44,55,66],'dsc'));
console.log(sortArray([77,88,11,22,44,55,66],'asc'));

