// var listOfCities = [ "nashville", "nashville", "los angeles", "nashville", "memphis", "barcelona", "sevillia", "isla canary", "barcelona", ];

// ? FIRST METHOD  BASED ON A COMPANY CODING CHALLENGE - MY SOLUTION
// return a count of the distinct duplicates ( not the times an entry is repeated ) entries in the list above. You can run your code by pressing the aqua colored "Run" button above left.
// function countDuplicatesInList(cityList) {
//   var count = 0;
// fill in code here
//   var dupCities = {};
//   var arrCount;
//   for (let i = 0; i < cityList.length; i++) {
//     dupCities[cityList[i]] = dupCities[cityList[i]] + 1 || 1;
//     arrCount = Object.values(dupCities); // get values of object and turn into array
//   }

//   arrCount.forEach((item) => { // loop through array and get items greater than 1 and add to count
//     if (item > 1) {
//       count = count + 1;
//     }
//   });
//   console.log(dupCities, arrCount); // { nashville: 3, 'los angeles': 1, memphis: 1, barcelona: 2, sevillia: 1, 'isla canary': 1 }
//   return count; // 2
// }

// function main() {
//   var count = countDuplicatesInList(listOfCities);
//   if (count == 2) {
//     console.log("yep!");
//   } else {
//     console.log("failed :( count = " + count);
//   }
// }

// main(); // failed :( count = 3
// * time and space complexit of countDuplicatesInList is O(n)

//create a function that determines wether all characters in a string are uique or not. Make it case-sensitive, meaning a string with both 'a' and 'A' could pass the test.

//Input: String
//Output: Boolean

// ? SECOND Method with lastIndexOf method
// function isUnique(str) {
//   for (let i = 0; i < str.length; i++) {
// O(n)
//     if (str.lastIndexOf(str[i]) !== i) {
// O(n)
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isUnique("abcde"));
// * Time O(n * n) -> O(n^2)
// * Space O(1)

// ? THIRD METHOD with sorting the string
function isUniqueSorted(str) {
  const chars = str.split("").sort();
  console.log(chars); // [ 'a', 'a', 'b', 'c', 'd', 'e' ]
  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i]) !== i) {
      return false;
    }
  }
  return true;
}

console.log(
  "Expected: False",
  isUniqueSorted("sortedDuppliccate"),
  "Expected: True",
  isUniqueSorted("sortedDupplicate")
);

//isUnique('89%df#s*a&x'), isUnique('abcadef'), isUnique('isuniqque')
