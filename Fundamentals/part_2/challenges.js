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
