"use strict";

function logger() {
  console.log("My name is Jack");
}
logger();

function fruitProcessor(appels, oranges) {
  const juice = `Juice with ${appels} appels and ${oranges} oranges.`;
  return juice;
}
const appeleJuice = fruitProcessor(5, 0);
console.log(appeleJuice);

const appleOrange = fruitProcessor(2, 4);
console.log(appleOrange);
