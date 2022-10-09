/*const myCountry = "Ukraine";
const myContinent = "Eurepe";
let population = 45;
// console.log(myCountry);
// console.log(population);
// console.log(myContinent);
// console.log(population);

const isIsland = false;
let language;
language = "ukrainian";

if (population < 50 && !isIsland && language === "english")
  console.log(`You should live in ${myCountry}! `);
//if (population < 50 && !isIsland && language === "ukrainian")
else console.log(`${myCountry} does not meet your criteria ;(`);

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof myCountry);
// console.log(language);

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

const language = "hindi";
switch (language) {
  case "chinese":
  case "mandarrin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/
const myCountry = "Ukraine";
let population = 130;
const average = population > 33 ? ` above ` : `below `;
console.log(
  `${myCountry}'s population is ${
    population > 33 ? ` above ` : `below `
  } average!`
);
