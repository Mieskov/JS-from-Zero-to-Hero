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

const myCountry = "Ukraine";
let population = 130;
const average = population > 33 ? ` above ` : `below `;
console.log(
  `${myCountry}'s population is ${
    population > 33 ? ` above ` : `below `
  } average!`
);
*/
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its 
capital city is ${capitalCity}.`;
}
const Ukraine = describeCountry("Ukraine", 42, "Kyiv");

const Finland = describeCountry("Finland", 6, "Helsinki");

const Poland = describeCountry("Poland", 38, "Warsaw");
console.log(Poland, Ukraine, Finland);

//Function declaration

function percentageOfWorld1(population, country) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population.`;
}
let descrUkraine = percentageOfWorld1(42, "Ukraine");
let descrFinland = percentageOfWorld1(6, "Finland");
let descrPoland = percentageOfWorld1(38, "Poland");

console.log(descrUkraine, descrFinland, descrPoland);
*/
/*
//Function expression
const percentageOfWorld2 = function (population, country) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population.`;
};

let descrUkraine = percentageOfWorld2(1201, "Ukraine");
let descrFinland = percentageOfWorld2(456, "Finland");
let descrPoland = percentageOfWorld2(3884, "Poland");
console.log(descrFinland, descrPoland, descrUkraine);
*/
// arrow function
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percentsgeOfUkraine = percentageOfWorld3(1558);
const percentsgeOfUSA = percentageOfWorld3(547);
console.log(percentsgeOfUkraine, percentsgeOfUSA);
console.log(percentageOfWorld3(457));
*/
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentsgeOfUkraine = percentageOfWorld1(population);

  return `${country} has ${population} million people, 
which is about ${percentsgeOfUkraine}% of the world.`;
}
console.log(describePopulation("Ukraine", 2579));
