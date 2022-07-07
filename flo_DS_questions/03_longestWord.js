// Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.
// Example:
// let str = "abppplee"
// let dict = {"able", "ale", "apple", "bale", "kangaroo"}

// $ longestWord(str, dict)
// $ 'apple'
// "able" and "ale" also work, but are shorter than "apple"
// "bale" has all the right letters, but not in the right order

function searchString(str, dict) {
  // sort dictionary by length first
  dict.sort((a, b) => {
    let result = a.length - b.length;
    return result;
  });

  // verify word in string
  function hasSubString(word, str) {
    // check for worst-case scenario first
    if (word.length === 0) return false;

    let strLength = 0;
    for (let i = 0; i < word.length; i++) {
      let index = str.indexOf(word[i], strLength);
      if (index < 0 || strLength > str.length) {
        return false;
      }
      strLength = index + 1;
    }
    return true;
  }

  // go over array of words, in order of length
  let longestWord = "";
  for (let i = 0; i < dict.length; i += 1) {
    if (hasSubString(dict[i], str)) {
      longestWord = dict[i];
    }
  }
  console.log(longestWord);
  return longestWord;
}
let dict = ["able", "ale", "apple", "bale", "abpppleee", "kangaroo", "madrid"];
console.log(searchString("abppplee", dict)); // apple
console.log(searchString("rigmadoriggd", dict)); // madrid
