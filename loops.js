'use strict';

// function average(arr) {
//   let sum = 0;
//   arr.forEach( (a) => {
//     sum += a
//   });
//   console.log(sum / arr.length);
// }


// const numbers = [7, 8, 9];
// average(numbers);
// console.log(numbers.length);

// function max(arr) {

//   let max = 0;
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] > max) {
//       max = arr[i];

//     }
//     i++;
//   }
//   console.log(max);
// }



// function min(arr) {
//   // your code here
//   let min = arr[0];
//   let i = 1;

//   while (i < arr.length) {
//     if (arr[i] < min) {
//       min = arr[i];

//     }
//     i++;
//   }
//   console.log(min);
// }

// max(numbers);
// min(numbers);


// function repeat(fn, n) {
//   for (let i = 0; i < n; i++) {
//     fn();
//   }
// }

// function hello() {
//   console.log('Hello world');
// }

// function goodbye() {
//   console.log('Goodbye world');
// }

// repeat(hello, 5);
// repeat(goodbye, 5);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'


//const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function (name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   console.log(newArray);
// }

//function startsWithR(str) {
//  return str[0] === 'R';
//}

//filter(myNames, startsWithR);

// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;

//   return (location) => {
//     warningCounter++;
//     let times = warningCounter > 1 ? 'times' : 'time';
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`)
//   }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const alienWarning = hazardWarningCreator('Alien Invaders');
// const shrekWarning = hazardWarningCreator('Shrek is loose');

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');

// alienWarning('New York City');

// alienWarning("Magical Swamp");
// alienWarning("Magical Swamp");
// alienWarning("Magical Swamp");
// alienWarning("Magical Swamp");

function removeNegative(arr) {
  let count = 0;

  arr.filter((steps) => steps[0] >= 0 && steps[1] >= 0)
    .map((negativeSteps) => negativeSteps[0] + negativeSteps[1])
    .forEach((sum) => count += sum);

  return count;
}

console.log(removeNegative([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]))