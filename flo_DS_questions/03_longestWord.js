// Given a string and a set of words in an array, find the longest word in the array that is a subsequence of string.
// string = abppplee
// words = ["able", "ale", "apple", "bale", "kangaroo"]
// Output: apple
// create a function that returns the longest word in the array that is a subsequence of string.
function longestWord(str, dict) {
  let longest = "";
  let current = "";
  for (let i = 0; i < str.length; i++) {
    current += str[i];
    console.log(current); // abppplee
    // need to check further...
  }
  console.log(longest);
  return longest;
}
console.log(
  longestWord("abppplee", ["able", "ale", "apple", "bale", "kangaroo"])
);
