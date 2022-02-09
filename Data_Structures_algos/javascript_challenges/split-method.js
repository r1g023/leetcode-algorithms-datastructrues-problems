const string = "I love JavaScript";

let arr = string.split(" ");
console.log(arr);

let arr2 = string.split(" ", 2);
console.log(arr2); // [ 'I', 'love' ]

let arr3 = string.split();
console.log(arr3); // [ 'I love JavaScript' ]

let arr4 = string.split("");
// ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
console.log(arr4);

console.log("".split()); //[ '' ]
console.log("".split("")); // [] empty array

// other methods
{
  let message = "Javascript, is awesome.  Javascript! is cool, and amazing!";
  let arrMessage = message.split(/[.,!,?]/);

  console.log(arrMessage); // [ 'Javascript is awesome', '  Javascript is cool' ]
}

//split and join methods
{
  let name = "Flying is a super power";
  let subs = name.split(" ");
  let joined = subs.join("-"); // converts to a string
  console.log(joined); // Flying-is-a-super-power
}
