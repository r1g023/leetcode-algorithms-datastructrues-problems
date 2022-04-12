//When dealing with big o notation
//1) OMEGA  -
//2) THETA
//3) OMNICRON - BIG O

// ? WORST CASE S
//Big O is the one that's seen more often,
let array = [1, 2, 3, 4, 5]; // look for NUMBER 1, iterate with a for loop
//---Best cASE would be #1, least iterations = OMEGA SYMBOL
//---WORST CASE = 7, THETA SYMBOL
//---AVERAGE CASE = 4, OMNICROM OR BIG O
//When we measure BIG-O, We are always measuring worst case

//-----------------------------------------------BIG O: O(n)------------------------------------------------//
// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// } //O(n)

// logItems(5); // O(n) operation
//ON number of operations will always be proportional to whatever N is.

//-----------------------------------------------BIG O: Drop Constants ------------------------------------------------//
// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }

//   for (let j = 0; j < n; j++) {
//     console.log(j);
//   }
// }

// logItems(5); // n + n = 2n = O(2n), it doesn't matter if it's 0(100n), it's always constant, we drop the remaining Ns

//-----------------------------------------------BIG O: O(n^2) ------------------------------------------------//
// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         console.log(i, j, k);
//       }
//     }
//   }
// } // O(n^3) = o(n^2)

// logItems(3);

//-----------------------------------------------BIG O: Drop Non-Dominants ------------------------------------------------//
// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log("i:", i, "j:", j);
//     }
//   } // O (n^2)
//   for (let k = 0; k < n; k++) {
//     console.log(k);
//   } // O (n)
// }
//Time and Space: O(n^2 + n)
//n is not really affecting the number of operations because n2 is the dominant term and N by itself is the non-dominant term.

// logItems(3);

//-----------------------------------------------BIG O: O(1) ------------------------------------------------//

// function addItems(n) {
//   return n + n + n; // = o(2) = o(1)
//   //number of operations does not change as N  changes
//   //it's the most efficient big O
// }

// // O(1) is often referred to as constant time, number of operations will always be 1,

// addItems(2);

//-----------------------------------------------BIG O: O(log n) ------------------------------------------------//
//array from 1 to 8
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
//find 1, what would be the most efficient way to find it, cut aray in half, is the 1 on first half or second half.
// 1 is on the first half [1,2,3,4]
// divide array again, 1 is on the first half of [1,2,3,4]
// 1 is on the first half [1,2]
// THIS IS CALLED DIVE AND CONQUER, it took 3 steps to divide and get to 1
// 2 ^ 3 = 8, two to the third power equals to 8
// log2^8 = 3
// log 2 ^ 1,073,741,824 how many times would you have to cut this number in half to get down to one item? That would be 31 times, 2 ^31 = 1,073,741,824
// if you had an array to iterate on it, and you wanted to find something and say you were looking for was the last item, you would have to look at a billion items to find it, BUT IF YOU USE DIVIDE AND CONQUER, you can find any item in that array, in 31 steps
// O(nlog n) is used in some sorting algorithms, most efficient that you can make a sorting algo, unless you're sorting only numbers, but if you're sorting data like strings, this is the most efficient way.

//-----------------------------------------------BIG O: different terms for Inputs ------------------------------------------------//
// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   for (let k = 0; k < n; k++) {
//     console.log(k);
//   }
// }
// // T & S: O(2n), drop the constant 2, so it becomes linear O(n)

// function logItems(a, b) {
//   for (let i = 0; i < a; i++) {
//     // O(a)
//     console.log(i);
//   } // first input of A will run A times (3 times)
//   for (let j = 0; j < b; j++) {
//     // O(b)
//     console.log(j);
//     // second input of B will run B times (4 times)
//   }

//   // O(a)+O(b) = O (a + b)
// }

// logItems(3, 4);

// function logItems(a, b) {
//   //nested for loop
//   for (let i = 0; i < a; i++) {
//     for (let j = 0; j < b; j++) {
//       console.log(i, j);
//     }
//   }
//   // O (a * b), multiply when inputs are different and are nested,
// }

// logItems(2, 3);

//-----------------------------------------------BIG O: Arrays ------------------------------------------------//

let myArray = [11, 3, 23, 7];
myArray.push(17);
myArray.pop();
//when PUSH & POP, we don't have ot re-index anything, this would be a O(1) operation because we are not altering the index of the array and

myArray.shift(); // [3,23,7], it has to be reindexed because we removed index 0 so now it has to be reindexed, and the next item and so forth.
myArray.unshift(11); // [11,3,23,7], adding the item back to the beginning of the array, we are reindexing the array again
//operation for shift and unshift would be o(n), because we are adding it to the beginning of the array
myArray.splice(1, 0, "Hi"); // at index 1, remove 0 items, but add char 'hi' [ 11, 'Hi', 3, 23, 7 ], we still have to reindex the array so this would be a O(n) operation
//IF YOU SEARCH BY VALUE, THIS WOULD BE O(N)
//IF YOU SEARCH BY INDEX, AND YOU SAY TELL ME WHAT'S AT INDEX 3, THOSE INDEXES ALLOW YOU TO GO DIRECTLY TO THAT PLACE IN MEMORY AS O(1) OPERATION
//indexes could also be a disadvantage for arrays if you are adding something to the beginning, because you will have to reindex everything. If you need to access data by index, arrays are a great data structure but if you're adding/removing items from the beginning perhaps a different data structure will do. You will always base your decision on BIG-0
console.log(myArray);

//-----------------------------------------------BIG O: Wrap up ------------------------------------------------//
