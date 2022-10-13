// Write a function that truncates words in a string to length n.
// Example:

// let n = 3;

// >truncate('never gonna give you up', n)
// 'nev gon giv you up'

// >truncate('*hello* darkness, my ~old_friend', n)
// '*hel* dar, my ~old_fri'

let n = 3;

function truncate(myString, n) {
  let words = myString.split(" ");
  let result = [];
  words.forEach((item) => {
    console.log(item); //
    if (item.length > n) {
      console.log(item);
      let myResult = item.slice(0, n);
      result.push(myResult);
    } else {
      result.push(item);
    }
  });
  console.log(result);
  return result.join(" ");
}

console.log(truncate("never gonna give you up", n)); // nev gon giv you up
console.log(truncate("*hello* darkness, my ~old_friend", n)); //  *he dar my ~ol

// second approach including special characters
function truncate2(myString, n) {
  let words = myString.split(" ");
  let result = [];
  let regex = /[_*~,]/;

  words.forEach((item) => {
    let specialChar = "";
    if (regex.test(item)) {
      specialChar = item.match(regex);
    }
    if (item.length > n) {
      result.push(item.slice(0, n) + specialChar);
    } else {
      result.push(item);
    }
  });
  console.log(result);
  return result.join(" ");
}

console.log(truncate2("never gonna give you up", n)); // nev gon giv you up
console.log(truncate2("*hello* darkness, my ~old_friend", n)); // *he* dar, my ~ol~
