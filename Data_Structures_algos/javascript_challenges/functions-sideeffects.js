//function to reverse an array and compare if item has been found
function findReverse(users, item) {
  const reversed = [...users].reverse(); // * do not mutate the original array
  console.log(reversed);
  let found = reversed.find((user) => {
    if (item === user) {
      return `you found user ${user}`;
    }
    return false;
  });
  return found;
}

let array = ["one", "two", "three"];

let result = findReverse(array, "three");
console.log(result);
