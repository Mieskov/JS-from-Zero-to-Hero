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
