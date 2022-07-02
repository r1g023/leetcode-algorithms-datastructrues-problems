// Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.
// Example:
// let str = "abppplee"
// let dict = {"able", "ale", "apple", "bale", "kangaroo"}

// $ longestWord(str, dict)
// $ 'apple'
// "able" and "ale" also work, but are shorter than "apple"
// "bale" has all the right letters, but not in the right order
function longestWord(str, dict) {
  let longest = "";
  let current = "";
  for (let i = 0; i < str.length; i++) {
    current = current + str[i];
    console.log(current); // abppplee
    // need to check further...
  }
  console.log(longest);
  return longest;
}

console.log(
  longestWord("abppplee", ["able", "ale", "apple", "bale", "kangaroo"])
);
