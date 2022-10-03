const myCountry = "Ukraine";
const myContinent = "Eurepe";
let population = 45;
console.log(myCountry);
console.log(population);
console.log(myContinent);
console.log(population);

const isIsland = false;
const language = "ukrainian";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof myCountry);
console.log(language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
const description1 = `${myCountry} is in ${myContinent}, and it is ${population} million people speak ${language}.`;
console.log(description1);

let average;
if (population > 33) {
  average = `${myCountry}'s population is above average`;
} else {
  average = `${myCountry}'s population is 20 million below average`;
}
console.log(average);

const numNeigbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeigbours === 1) console.log("Only 1 border!");
else if (numNeigbours > 1) console.log("More than 1 border");
else {
  console.log("No borders");
}
