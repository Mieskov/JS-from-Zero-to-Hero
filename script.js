"use strict";
/*
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
*/
/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1988);

//Function expresion
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1988);
console.log(age1, age2);
*/
/*
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} is retires in ${retirement}.`;
};
console.log(yearsUntilRetirement(1988, "Jack"));
console.log(yearsUntilRetirement(1975, "Bob"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(appels, oranges) {
  const appelePieces = cutFruitPieces(appels);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${appelePieces} appele pieces and ${orangePieces} orange pieses.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};
console.log(
  yearsUntilRetirement(1988, "Jack"),
  yearsUntilRetirement(1950, "Bob")
);
