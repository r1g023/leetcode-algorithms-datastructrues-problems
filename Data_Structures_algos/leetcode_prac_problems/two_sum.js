// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Brute Force solution, can be optimized to be O(n)
function twoSum(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) result.push(i, j);
    }
  }
  console.log(result);
  // [0, 1], because 0 and 1 are the indices of the numbers that sum to target 9
  return result;
}
//Time and Space Complexity: O(n^2)
let nums = [2, 7, 11, 15];
twoSum(nums, 9);

//Optimized Solution for twoSum
//function to add two numbers together
