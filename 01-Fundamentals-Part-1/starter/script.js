const heightMark = 78;
const heightJohn = 92;
const weightMark = 1.69;
const weightJohn = 1.95;
const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

const avgDolphins = (960 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
const dolphinsWinner = avgDolphins >= avgKoalas;
if (dolphinsWinner && avgDolphins >= 100 && avgDolphins != avgKoalas) {
  console.log("Dolphins win!");
} else if (!dolphinsWinner && avgKoalas >= 100 && avgDolphins != avgKoalas) {
  console.log("Koalas win!");
} else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
  console.log("It's a draw");
}
else {
  console.log("No winners here");
}
console.log(avgDolphins, avgKoalas);

const bill = 275;
const tip = (bill >= 50 && bill <= 300 ? 0.15 : 0.2) * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}`);