"use strict";

function logger() {
  console.log("My name is Jack");
}
logger();

/*function fruitProcessor(appels, oranges) {
  const juice = `Juice with ${appels} appels and ${oranges} oranges.`;
  return juice;
}
const appeleJuice = fruitProcessor(5, 0);
console.log(appeleJuice);

const appleOrange = fruitProcessor(2, 4);
console.log(appleOrange);
*/

function carRent(BMW, audi) {
  const car = `How many ${BMW} BMW and ${audi} audi do you have?`;
  return car;
}
const carNum = carRent(2, 5);
console.log(carNum);
