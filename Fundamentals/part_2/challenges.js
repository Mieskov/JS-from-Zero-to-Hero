//Challenge 1!!!
/*

//data 1:
// const Markmass = 78;
// const MarkHeight = 1.69;

// const Johnmass = 92;
// const JohnHeight = 1.76;

//data 2:

const Markmass = 95;
const MarkHeight = 1.88;

const Johnmass = 85;
const JohnHeight = 1.76;
//

const bmiMark = Markmass / MarkHeight ** 2;
const bmiJohn = Johnmass / (JohnHeight * JohnHeight);
const markHigherBMI = bmiMark < bmiJohn;
console.log(bmiJohn, bmiMark, markHigherBMI);
//Challenge 2!!!

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else if (bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}
*/
/*
///Challenge 3:

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

//Bonus 1:

const scoreDolphins = (97 + 112 + 11) / 3;
const scoreKoalas = (109 + 95 + 10) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win with ${scoreDolphins} points🏆!!!`);
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log(`Koalas win wiht ${scoreKoalas} points 🏆!!!`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(
    `Dolphins (${scoreDolphins}) and Koalas (${scoreKoalas}) has a draw!!!😈 `
  );
} else {
  console.log("No one wins the Trophy 🏆🤦‍♂️");
}
*/
/*
//Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

//PART 2: Challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})🏆`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})🏆`);
  } else {
    console.log(`No one win (${scoreKoalas} vs. ${scoreDolphins})🏆`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
*/
/*
//challenge #2
const bill = [125, 555, 44];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(bill);
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips);
const total = [
  bill[0] + calcTip(bill[0]),
  bill[1] + calcTip(bill[1]),
  bill[2] + calcTip(bill[2]),
];
console.log(total);
*/
//Challenge #3

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.mass / this.height) * 2;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.mass / this.height) * 2;
  },
};

console.log();
