// Write a function that determines if all the characters in a given string are unique. Can you do this without making any new variables? You choose if you want to include capitalization in your consideration for this one, as a fun challenge.
// Example:
// $ allUnique('Zainab')
// false
// $ allUnique('cat & dog')
// false
// $ allUnique('cat+dog')
// true
// $ allUnique('Jason')
// true

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    console.log("index:", i, str[i]);
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}
console.log(isUnique("cat+dog")); // true
