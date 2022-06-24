// Given a string of words, write a function that reverses all of the words within the string.

// Example:
// $ reverse("The greatest victory is that which requires no battle")
// $ "battle no requires which that is victory greatest The"

function reverseWords(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverseWords("The greatest victory is that which requires no battle"));
// "battle no requires which that is victory greatest The"
