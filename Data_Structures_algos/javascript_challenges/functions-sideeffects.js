//function to reverse an array and compare if item has been found
function findReverse(users, item) {
  const reversed = [...users].reverse(); // * do not mutate the original array
  console.log(reversed);
  let found = reversed.find((user) => {
    return user === item;
  });
  return found ? `${item} found` : `${item} not found`;
}

let array = ["one", "two", "three"];

let result = findReverse(array, "four");
console.log(result);

// merging arrays
{
  const merge = (first, second) => {
    for (let i = 0; i < second.length; i++) {
      first.push(second[i]);
      console.log(second[i]);
    }
    return first;
  };

  console.log(merge([1, 2, 3], [4, 5, 6]));

  // spread operator
  let arr1 = [1, 2, 3];
  let arr2 = "Array";
  let arr3 = [4, 5, 6];
  let arr4 = [7, 8, 9];
  let mergeArrays = [...arr1, ...arr2];
  console.log(mergeArrays); // = [1, 2, 3, 'A', 'r', 'r', 'a', 'y' ]

  //contact operator
  let concatArrays = arr1.concat(arr2);
  let alternateConcatArrays = [].concat(arr1, arr2);
  console.log(concatArrays); // [ 1, 2, 3, 'Array' ]
  console.log(alternateConcatArrays);

  // * mutates arr3 because a copy wasn't created
  //let pushMerge = arr3.push(arr4)
  //console.log(arr3) // [ 4, 5, 6, [ 7, 8, 9 ] ]

  // * can also be done with a reduce method
  let mergedReduced = arr4.reduce((arr, item) => {
    arr.push(item);
    return arr;
  }, arr3);
  console.log(mergedReduced); // [ 4, 5, 6, 7, 8, 9 ]
}
