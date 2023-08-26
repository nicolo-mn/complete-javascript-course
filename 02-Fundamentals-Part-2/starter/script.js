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
else console.log(`No teams win`);