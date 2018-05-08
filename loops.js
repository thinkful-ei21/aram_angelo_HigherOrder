'use strict';
const numbers = [10, 4, 6, 31243, 532, 534, 0, 1, 2, 3];

console.log(numbers.length);

function max(arr) {

  let max = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];

    }
    i++;
  }
  console.log(max);
}



function min(arr) {
  // your code here
  let min = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (arr[i] < min) {
      min = arr[i];

    }
    i++;
  }
  console.log(min);
}

max(numbers);
min(numbers);
