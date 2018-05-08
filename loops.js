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


const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function (name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}

function startsWithR(str) {
  return str[0] === 'R';
}

filter(myNames, startsWithR);