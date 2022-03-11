// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// ! NAIVE BRUTE FORCE SOLUTION
// let palindromeWord = 'top spot'
// let reversedPalindrome = palindromeWord.split('').reverse().join('')
// console.log(reversedPalindrome) // tops pot

// * PSEUDO CODE
// 1) Sanitize input string by removing non-alphanumeric characters and converting to lowercase. 2) Create a left and right pointer, initially at start and end of input string.

// While Left less than Right
//   If Left char is not equal to Right char, return false
// Return true

// ? Optimized Solution
function isPalindrome(s) {
  //sanitize the string, use regex to grab all non-alphanumerical characters, such as underscores, spaces, exclaimation points, etc.
  s = s.toLowerCase().replace(/[\W_]/g, "");
  let left = 0;
  let right = s.length - 1;
  console.log(right);
  while (left < right) {
    console.log(left, s[left]);
    console.log(right, s[right]);
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1) Left and Right Pointers take up constant space

console.log(isPalindrome("race car")); //true

module.exports = isPalindrome;

// s = s.toLowerCase().replace(/[\W_]/g, "");
// let left = 0;
// let right = s.length - 1;
// console.log(right, s);

// while (left < right) {
//   console.log(left, s[left]);
//   console.log(right, s[right]);
//   if (s[left] !== s[right]) {
//     return false;
//   }
//   left++;
//   //left = left + 1
//   right--;
//   //right = right - 1
// }
// return true;
