"use strict"; /*
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
*/ /*
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
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retirement in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} already retirement`);
    return -1;
  }
};

yearsUntilRetirement(1988, "Jack");
yearsUntilRetirement(1950, "Bob");
console.log(yearsUntilRetirement(1950, "Bob"));
*/
/*

const calcAverage = (a, b, c) => (a + b + c) / 3;

// //Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}.)`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}.)`);
  } else {
    console.log("No one win!!!");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
//test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
*/
//ARRAYS
/*
const friend1 = "Piter";
const friend2 = "Michael";
const friend3 = "Steven";

const friends = ["Michael", "Stiven", "Peter"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);

console.log(friends[friends.length - 1]);
console.log(friends[friends.length - 2]);
console.log(years[years.length - 2]);

friends[2] = "Jay";
console.log(friends);
console.log(friends[2]);
console.log(friends[friends.length - 1]);

const firstName = "Jack";
const jack = [firstName, "Mieskove", 2037 - 1988, "developer", friends];
console.log(jack);
console.log(jack[jack.length - 1]);

jack[4] = "Bob";
console.log(jack[4]);
jack[4] = years;
console.log(jack[4]);
jack[2] = firstName;
console.log(jack);

jack[2] = 2037 - 1988;
jack[4] = friends;
console.log(jack);
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1988, 1999, 2005, 2020];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const age = `${age1}, ${age2}, ${age3}.`;
console.log(age);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
const friends = ["Peter", "Jack", "Jay", "Kuki", "Mike"];
//Add elements
const newLength = friends.push("Jonas");
console.log(friends);

console.log(newLength);

friends.unshift("Mickle");
console.log(friends);

//Remove elements

friends.pop();
const lastName = friends.pop();
console.log(friends);
console.log(lastName);

friends.shift();
const firstPlace = friends.shift();
console.log(friends);
console.log(firstPlace);

console.log(friends.indexOf("Jay"));
console.log(friends.indexOf("Bob"));
friends.push(23);

friends.unshift(32);
console.log(friends);

console.log(friends.includes("32"));
console.log(friends.includes(32));
console.log(friends.includes("Jack"));

if (friends.includes("Jack")) {
  console.log("Jack is my friend!");
}
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcTip = function (bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

console.log(calcTip(50));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/
/*
const jack = {
  firstName: "Jack",
  lastName: "Mieskove",
  age: 2037 - 1988,
  job: "coder",
  friends: ["Peter", "Jay", "Lucy", "Bob"],
};
console.log(jack);
console.log(jack.age);
console.log(jack["lastName"]);

const nameKey = "Name";

console.log(jack["first" + nameKey]);
console.log(jack["last" + nameKey]);

const intresdedIn = prompt(
  "What do you want to know about Jack? Choose between firstName, lastName,age, job, friends!!!"
);

if (jack[intresdedIn]) {
  console.log(jack[intresdedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName,age, job, friends!!!"
  );
}

jack.location = "Ukraine";
jack["wife"] = "Ruslana";
console.log(jack) onas",
  friends: ["Michael", "Peter", "Jay"],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);*/
/*
const jack = {
  firstName: "Jack",
  lastName: "Mieskove",
  birthYear: 1988,
  carAge: 2007,
  job: "coder",
  friends: ["Peter", "Jay", "Lucy", "Bob"],
  hasDriverLicense: false,

  // calcAgeCar: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAgeCar: function () {
  //   // console.log(this);
  //   return 2037 - this.carAge;
  // return 2037 - this.birthYear;

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${jack.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jack.calcAge());
console.log(jack.age);
console.log(jack.age);
console.log(jack.age);
console.log(jack.age);
console.log(jack.getSummery());
jack.hasDriverLicense = true;
console.log(jack.getSummery());
*/

// Challenge #3
const Marc = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const John = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
