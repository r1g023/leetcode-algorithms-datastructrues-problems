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

{
  let name = "Super Javascript";
  let [first, second] = name.split(" ");
  console.log(first, second); // Super Javascript
}

//additional methods join / split and a few more
{
  Number.isNaN(3); // returns false
  Number.isNaN(3.14159); // returns false
  Number.isNaN(0 / 0); // returns true
  Number.isNaN(3 * "blah"); // returns true

  Number.isInteger(666); // true
  Number.isInteger(-666); // true
  Number.isInteger(12 * 7); // true
  Number.isInteger(0); // true
  Number.isInteger(3 / 4); // false
  Number.isInteger("666"); // false
  Number.isInteger(Infinity); // false

  // var inStr = "lots and ";
  // var outStr = str.repeat(3); // outStr contains ' lots and lots and lots and '

  var string1 = "The quick brown fox ";
  var string2 = string1.replace("brown", "orange"); // string2 is now "the quick orange fox"

  var string1 = "The quick brown fox ";
  var newArray = string1.split(" ");
  var string1 = "The quick brown fox ";
  var sub1 = string1.substr(4, 11); // extracts "quick brown"
  var sub2 = string1.substr(4); // extracts "quick brown fox"

  var myArray = [];
  myArray[0] = "Monday";
  myArray[1] = "Tuesday";
  myArray[2] = "Wednesday";
  myArray[10] = "Thursday"; // array now has lenght of 11, empty slots are filled with undefined
  console.log(myArray);

  var myOtherArray = ["Thursday", "Friday"];
  var myWeek = myArray.concat(myOtherArray);
  // myWeek will contain 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  var longDay = myArray.join(); // returns MondayTuesdayWednesday
  var longDay = myArray.join("-"); // returns Monday-Tuesday-Wednesday
  var longDay = myArray.toString();
  longDay; // returns Monday,Tuesday,Wednesday

  var myWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  var myShortWeek = myWeek.slice(1, 3);
  // myShortWeek contains ['Tuesday', 'Wednesday']

  var myWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  var myShortWeek = myWeek.slice(-3, 4);
  // myShortWeek contains ["Wednesday", "Thursday"]
  var myShortWeek = myWeek.slice(1, -2);
  // myShortWeek contains ["Tuesday", "Wednesday"]

  var myArray = [2, 3, 4, 5, 6];
  function cube(x) {
    console.log(x * x * x);
  }
  myArray.forEach(cube);

  //diff way
  var myArray = [2, 3, 4, 5, 6];
  function cube(x) {
    console.log(x * x * x);
  }
  for (var y of myArray) {
    cube(y);
  }
}

// Escape Sequence Character
// \t Tab
// \n New line; inserts a line break at the point where it appears in the string
// \" Double quote
// \' Single quote or apostrophe
// \\ The backslash itself
// \x99 Two-digit number specifying the hexadecimal value of an ASCII character
// \u9999 Four-digit hexadecimal number specifying a Unicode character
