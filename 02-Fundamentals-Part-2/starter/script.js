'using strict';
// Challenge 1
const dolphinsScore1 = 44, dolphinsScore2 = 23, dolphinsScore3 = 71;
const koalasScore1 = 65, koalasScore2 = 54, koalasScore3 = 49;
const calcAverage = (p1,p2,p3) => (p1+p2+p3)/3;
const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
const checkWinner = (avg1, avg2) => avg1 >= 2 * avg2;
const dolphinsWinner = checkWinner(avgDolphins, avgKoalas);
const koalasWinner = checkWinner(avgKoalas, avgDolphins);
if (dolphinsWinner === true) console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`); 
else if (koalasWinner === true) console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`); 
else console.log(`No team wins`);

// Challenge 2
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? 0.15 : 0.2) * bill;
console.log(`Test bill: ${calcTip(100)}`);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

// Challenge 3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

if (mark.calcBMI() >= john.calcBMI()) {
  console.log(`Mark's BMI (${mark.BMI}) is higer than John's (${john.BMI})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`John's BMI (${john.BMI}) is higer than Mark's (${mark.BMI})!`);
}