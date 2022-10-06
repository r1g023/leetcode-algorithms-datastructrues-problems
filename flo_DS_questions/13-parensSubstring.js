// Given a string s consisting of various parenthesis ( and ), find the length of the longest valid parenthesis substring.
// Example:
// > parensSubstring('(()(')
// 2
// > parensSubstring(')()(()))')
// 6

function parensSubstring(s) {
  let stack = [];
  let max = 0;

  s.split("").forEach((char, i) => {
    if (char === "(") {
      console.log(i);
      stack.push(i);
    } else {
      stack.pop();
    }

    if (stack.length === 0) {
      console.log(i);
      stack.push(i);
    } else {
      max = Math.max(max, i - stack[stack.length - 1]);
    }
  });
  return max;
}

console.log(parensSubstring("(()(")); // 2
console.log(parensSubstring(")()(()))")); // 6

// let names = "(()(";
// console.log(names.split(""));
