// Given two arrays A and B, return the indices in array A at which the two arrays intersect. If the two arrays have no intersection at all, return null.
let listA = [1, 4, 5, 6];
let listB = [2, 3, 4, 5, 6];
// > findIntersection(listA, listB)
// > [1, 2]
function findIntersection(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      //worst-case
      //   if (a[i] !== b[j]) return null;
      if (a[i] === b[j]) {
        console.log(a[i]); // 4, 5, 6
        console.log(b[j]); // 4, 5, 6
        result.push(i);
      }
    }
  }
  console.log(result); // [1,2,3]
  return result;
}

console.log(findIntersection(listA, listB)); // [1, 2, 3]
