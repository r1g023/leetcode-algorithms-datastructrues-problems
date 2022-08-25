// Given a list, swap every two adjacent nodes.
// Example:
// > swapPairs([1,2,3,4])
// > [2,1,4,3]

// > swapPairs([])
// > []

let pairs = [1, 2, 3, 4];
let emptyList = [];

function swapPairs(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      console.log("idx:", i, "val:", list[i]);
      result.push(list[i + 1]);
    } else if (i % 2 === 1) {
      console.log("idx:", i, "val:", list[i]);
      result.push(list[i - 1]);
    }
  }
  return result;
}

console.log(swapPairs(pairs)); // [2,1,4,3]
console.log(swapPairs(emptyList)); // []
