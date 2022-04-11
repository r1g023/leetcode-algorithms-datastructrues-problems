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
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(5); // O(n) operation
