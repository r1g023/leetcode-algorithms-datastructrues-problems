// Given an array of objects A, and an array of indexes B, reorder the objects in array A with the given indexes in array B.
// Example:let a = [C, D, E, F, G, H];
// let b = [3, 0, 4, 1, 2, 5];

// $ reorder(a, b)
// [D, F, G, C, E, H]

const a = ["C", "D", "E", "F", "G", "H"];
const b = [3, 0, 4, 1, 2, 5];

function reorder(a, b) {
  var result = [];
  for (let i = 0; i < a.length; i++) {
    result[b[i]] = a[i];
  }
  console.log(result); // [D, F, G, C, E, H]
  return result;
}

console.log(reorder(a, b));
console.log(a)
