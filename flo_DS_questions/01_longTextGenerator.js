// Create a loooong teeeext generator that takes in a string and an integer n, and multiplies the vowels in the string by n.
// The vowels are a, e, i, o, u.
// Example:
function longTextGenerator(string, n) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      console.log(string[i]); // e, o
      let getVowels = string[i].repeat(n);
      console.log(getVowels); // ee, oo
      newString = newString + getVowels;
    } else {
      console.log(string[i]); // h, l, l
      newString = newString + string[i];
    }
  }
  console.log(newString); // heelloo
  return newString;
}

//TIME AND SPACE complexity of longTextGenerator:
// Time: O(n)
// Space: O(n)

console.log(longTextGenerator("hello", 2));
