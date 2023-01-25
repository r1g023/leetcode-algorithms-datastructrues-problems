// Given a list of strings arr, and a max size n, return a new list where the strings (from left to right) are joined together with a space, so that each new string is less than or equal to the max size.
// Examples:
// > combineStrings(["a", "b", "c", "d", "e", "f", "g"], 5)
// ["a b c", "d e f", "g"]

// > combineStrings(["a", "b", "c", "d", "e", "f", "g"], 12)
// ["a b c d e f", "g"]

// > combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"], 20)
// ["alpha beta gamma", "delta epsilon"]`

function combineStrings(arr, n) {
  let currentString = "";
  let result = [];

  // worst case scenario

  // worse case scenario if no array is passed or something other than an array is passed
  if (!Array.isArray(arr)) {
    return false;
  }

  // if (arr.length <= 1) {
  //   return false;
  // }

  arr.forEach((item) => {
    // console.log(currentString.length);
    // console.log(item.length);
    if (currentString.length + item.length <= n) {
      //  console.log(currentString.length);
      console.log(item);
      currentString = currentString + item + " ";
    } else {
      result.push(currentString);
      currentString = item + " ";
    }
  });
  console.log(currentString);
  result.push(currentString);
  return result;
}

let testArray = ["a", "b", "c", "d", "e", "f", "g"];
let testArray2 = ["alpha", "beta", "gamma", "delta", "epsilon"];
let testArray3 = ["rigo"]; // worst case scenario test
let testArray4 = [""]; // worst case scenario test
let emptyArray = []; // worst case scenario test

console.log(combineStrings(testArray, 5)); // [ 'a b, c', 'd e f', 'g' ]
console.log(combineStrings(testArray, 12)); // [ 'a b c d e', 'g' ]
console.log(combineStrings(testArray2, 20)); // [ 'alpha beta gamma', 'delta epsilon' ]
console.log(combineStrings(testArray3, 5)); // false
console.log(combineStrings(testArray4, 5)); // false
console.log(combineStrings(emptyArray, 5)); // false
