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
*/ /*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation("Ukraine", 2579);
describePopulation("USA", 4587);
describePopulation("Finland", 2358);
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(145, 45, 85);
const scoreKoalas = calcAverage(14, 25, 84);
console.log(scoreDolphins, scoreKoalas);

//

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas win (${avgKoalas} vs. ${avgDolphins}).`);
  } else {
    console.log(`No one win!!!`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
*/
/*
const populations = [42, 1551, 78, 38];
console.log(populations.length === 4);

const percentageOfWorld = function (populations) {
  return (populations / 7900) * 100;
};
const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages[1]);
*/
/*
const neighbour = ["Poland", "Moldova", "Belarasha", "rashka"];
neighbour.push("Utopia");
console.log(neighbour);
neighbour.pop();
console.log(neighbour);
if (!neighbour.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbour[neighbour.indexOf("Belarasha")] = "Repablic Belarasha";
console.log(neighbour.indexOf("Belarasha"));
neighbour[2] = "Repablic Belarasha";

console.log(neighbour);
*/
/*
const myCoutry = {
  country: "Ukraine",
  capital: " Kyiv",
  language: "ukrainian",
  population: 42,
  neighbour: ["Poland", "Moldova", "Belarasha", "rashka"],
  discribe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
};

console.log(
  `${myCoutry.country} has ${myCoutry.population} million ${myCoutry.language}-speaking people, ${myCoutry.neighbour.length} neighbouring countries and a capital called ${myCoutry.capital}.`
);
myCoutry.discribe();

const model = true;

console.log((BMW = model ? "Ok" : "bad"));
*/

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting.`);
// }
const percentageOfWorld2 = function (populations) {
  return (populations / 7900) * 100;
};
const populations = [42, 1551, 78, 38];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

const percentageOfWorld = function (populations) {
  return (populations / 7900) * 100;
};
const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages[1]);

const istOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
