// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }
    windowCharsMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
}

module.exports = lengthOfLongestSubstring;

// if (s.length <= 1) return s.length;

//
// const seen = new Map();
// let left = 0,
//   longest = 0;

// for (let right = 0; right < s.length; right++) {
//   const curr = s[right];
//   const pre = seen.get(curr);
//   if (pre >= left) {
//     left = pre + 1;
//   }
//   seen.set(curr, right);
//   longest = Math.max(longest, right - left + 1);
// }
// return longest;
