// Given an array of numbers nums and a number k, write a function that return all pairs of numbers that add up to k
// nums = [1,4,6,3,2]

// addsUp(nums, 5)
// > [{1,4}, {3,2}]

// nums = [8,1,4,9,6,2,3]

// addsUp(nums, 10)
// > [{8,2}, {1,9}, {4,6}]

function addsUp(nums, k) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        let mySet = new Set();
        mySet.add(nums[i]);
        mySet.add(nums[j]);
        result.push(mySet);
      }
    }
  }

  console.log(result); // [ Set { 1, 4 }, Set { 3, 2 } ]  &  [ Set { 8, 2 }, Set { 1, 9 }, Set { 4, 6 } ]
  return result;
}

console.log(addsUp([1, 4, 6, 3, 2], 5)); // [set {1,4}, set {3,2}]
console.log(addsUp([8, 1, 4, 9, 6, 2, 3], 10)); // [ Set { 8, 2 }, Set { 1, 9 }, Set { 4, 6 } ]
