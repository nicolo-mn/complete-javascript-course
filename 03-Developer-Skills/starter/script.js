// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let final = '...';
  for (let i=0; i < arr.length; i++) {
    final += ` ${arr[i]}°C in ${i+1} days ...`;
  }
  console.log(final);
}

printForecast(data2);