/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let jonas_matila = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";
console.log(myCurrentJob);
console.log(myFirstJob);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let age = 31;
age = 30;

const birthYear = 1991;
//birthYear = 1900;
//const job;

var job = "programmer";
job = "teacher";

lastName = "Mieskov";
console.log(lastName);


// Math operators
const now = 2037;

const ageJack = now - 1988;
const ageRuslana = now - 1985;

console.log(ageJack, ageRuslana);
console.log(ageJack * 2, ageJack / 10, 2 ** 3);

const firstName = "Jack";
const lastName = "Mieskov";
console.log(firstName + " " + lastName);
// Assigment operators
let x = 10 + 5; // x= 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 10 = 100
x++; // x = x + 1
x--; // x= x - 1
console.log(x);

// Comparison operators
console.log(ageJack < ageRuslana); // >, <, >=, <=
console.log(ageRuslana <= 18);
const isFullAge = ageJack >= 18;
console.log(now - 1988 > now - 1985);

const now = 2037;

const ageJack = now - 1988;
const ageRuslana = now - 1985;

const averageAge = (ageJack + ageRuslana) / 2;
console.log(ageJack, ageRuslana, averageAge);



const firstName = "Jack";
const birthYear = 1988;
const currentYear = 2037;
const job = "developer";

const jack = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}! `;
console.log(jack);

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license `);
} else {
  const yeaesLeft = 18 - age;
  console.log(`Sarah is to young. Wait another ${yeaesLeft} years :)`);
}

const birthYear = 2001;
let century;
if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);
*/
/*
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;
*/
/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const bodyMassIndexMark1 = massMark / heightMark ** 2;
//const bodyMassIndexMark2 = massMark / (heightMark * heightMark);
//console.log(bodyMassIndexMark1, bodyMassIndexMark2);

const bodyMassIndexJohn1 = massJohn / heightJohn ** 2;
//const bodyMassIndexJohn2 = massJohn / (heightJohn * heightJohn);
//console.log(bodyMassIndexJohn1, bodyMassIndexJohn2);

if (bodyMassIndexMark1 > bodyMassIndexJohn1) {
  console.log(
    `Mark's BMI (${bodyMassIndexMark1}) is higher than John's(${bodyMassIndexJohn1})!`
  );
} else {
  console.log(
    `John's BMI (${bodyMassIndexJohn1}) is higher than Mark's(${bodyMassIndexMark1})!`
  );
}

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);

console.log(Number("John"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old."); // to string
console.log("23" - "10" - 3); // to number
console.log("23" / "2"); // to number

let n = "1" + 1; //11 string
n = n - 1; // 10 number
console.log(n);

*/
// 5 folsy values: 0, '' ,undefined, null, NaN
/*
const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) console.log("Cool!! 23 is an amzaing number!");
else if (favourite === 7) console.log("7 is also a cool number");
else if (favourite === 9) console.log("9 is also a cool number");
else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
*/

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
