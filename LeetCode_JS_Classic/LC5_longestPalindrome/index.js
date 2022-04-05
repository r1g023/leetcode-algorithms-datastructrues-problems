//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

const longestPalindrome = (s) => {
  if (!s || s.length <= 1) return s;
  let startIndex = 0;
  let maxLength = 1;
  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalLength = right - left + 1;

      console.log(currentPalLength);
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        console.log(maxLength);
        startIndex = left;
        console.log(startIndex);
      }

      console.log(left, s[left], right, s[right]);
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }
  return s.slice(startIndex, startIndex + maxLength);
};

longestPalindrome("yanaz");

module.exports = longestPalindrome;

// let startIndex = 0;
// let maxLength = 1;

// //function expandAroundMiddle
// function expandAroundMiddle(left, right) {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     console.log(s.length);
//     console.log(left, s[left]);
//     console.log(right, s[right]);
//     //code only runs if we have a valid palindrome
//     const currentPalLength = right - left + 1; //array indece starts at 0, add 1 to compensate
//     console.log(right);
//     console.log(left);
//     console.log(right - left + 1);
//     if (currentPalLength > maxLength) {
//       maxLength = currentPalLength;
//       console.log(maxLength);
//       startIndex = left;
//       console.log(left);
//     }
//     left--;
//     right++;
//   }
// }

// //iterate through every character on input string
// for (let i = 0; i < s.length; i++) {
//   console.log("i", i);

//   expandAroundMiddle(i - 1, i + 1);
//   expandAroundMiddle(i, i + 1); // accounts for spaces in between characters
// }

// return s.slice(startIndex, startIndex + maxLength);
