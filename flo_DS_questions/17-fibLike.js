// Given two integers, generate a “fibonacci-like” sequence of n digits (where the next number in the pattern is the sum of the previous two numbers). Extra credit: Given a sequence, determine if the sequence is “fibonacci-like”.
// Example:
// > let n = 5

// > fibLike(10, 20, n)
// > [10, 20, 30, 50, 80]

// > fibLike(3, 7, n)
// > [3, 7, 10, 17, 27]

function fibLike(a, b, n) {
  let result = [a, b];

  for (let i = 2; i < n; i++) {
    let arrayOne = result[i - 1];
    let arrayTwo = result[i - 2];

    console.log(arrayOne); // 20, 30, 50
    console.log(arrayTwo); // 10, 20, 30
    //10, 20,30, 20+30, 30+50 = first output on fibLike input

    console.log(arrayOne);
    console.log(arrayTwo);
    // 3, 7,10, 7+10, 10+17 = second output on fibLike input

    // return true if fibonaci like else return false

    result.push(arrayOne + arrayTwo);
  }
  return result;
}

//1st input
console.log(fibLike(10, 20, 5)); // [ 10, 20, 30, 50, 80 ]
//2nd input
console.log(fibLike(3, 7, 5)); // [ 3, 7, 10, 17, 27 ]

// determine if the sequence is “fibonacci-like”.

function fibLike(array) {
  for (let i = 2; i < array.length; i++) {
    console.log(array[i]);
    console.log(array[i - 1] + array[i - 2]);
    if (array[i] !== array[i - 1] + array[i - 2]) {
      return false;
    }
  }

  return true;
}

let array = [1, 20, 21, 41, 100];
let array2 = [10, 20, 30, 50, 80];

console.log(fibLike(array)); // false
console.log(fibLike(array2)); // true
