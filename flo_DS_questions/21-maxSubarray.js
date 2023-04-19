// Given an array of integers arr and an integer n, return a subarray of arr of length n where the sum is the largest. Make sure you maintain the order of the original array, and if n is greater than arr.length, you can choose what you want to return.
// Example:
// > maxSubarray([-4,2,-5,1,2,3,6,-5,1], 4)
// >[1,2,3,6]

// > maxSubarray([1,2,0,5], 2) [0,5]
// > [0,5]

function maxSubarray(arr, n) {
  let maxCount = 0;
  let subArray = [];

  //worst case scenario
  if (n > arr.length) {
    throw new Error(
      `You're tweaking, ${n} is greater than the length of the array`
    );
  }

  arr.forEach((item, index) => {
    if (index <= arr.length - n) {
      console.log("item", item);
      console.log("index", index);

      let newArray = arr.slice(index, index + n);
      console.log(newArray);

      let totalSum = newArray.reduce((a, b) => a + b);
      console.log("totalSum", totalSum);

      if (totalSum > maxCount) {
        maxCount = totalSum;
        subArray = newArray;
        console.log("subArray", subArray);
      }
    }
  });

  return subArray;
}

console.log(maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4)); // [1,2,3,6]

console.log(maxSubarray([1, 2, 0, 5], 2)); // [0,5]

console.log(maxSubarray([1, 2, 3], 4)); // Error: 4 is greater than the length of the array
