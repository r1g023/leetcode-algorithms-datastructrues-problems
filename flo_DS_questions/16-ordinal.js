// Write a function to output the ordinal suffix of a positive integer concatenated to an inputted number.
// > ordinal(3)
// > '3rd'

// > ordinal(57)
// > '57th'

function ordinal(num) {
  const lastDigit = num % 10;

  if (lastDigit === 1) return `${num}st`;

  if (lastDigit === 2) return `${num}nd`;

  if (lastDigit === 3) return `${num}rd`;

  return `${num}th`;
}

console.log(ordinal(3)); // 3rd
console.log(ordinal(57)); // 57th

// test cases
console.log(3 % 10); // 3
console.log(57 % 10); // 7
