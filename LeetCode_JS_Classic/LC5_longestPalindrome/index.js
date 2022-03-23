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

function longestPalindrome(s) {
  let startIndex = 0; // grab longest
  let maxLength = 1; // longest palindrome has to be at least 1
  console.log(s);
  //helper function
  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalLength = right - left + 1;
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIndex = left;
      }
      left = left - 1;
      right = right + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1); // accounts for spaces in between characters
    expandAroundMiddle((i, i + 1));
  }
  return s.slice(startIndex, startIndex + maxLength);
}

console.log(longestPalindrome("tesannates")); //anna

module.exports = longestPalindrome;
