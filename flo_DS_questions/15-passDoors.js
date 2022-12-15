// Let’s say you have n doors that start out as closed. With the first pass across the doors, you toggle every door open. With the second pass, you toggle every second door. With the third, every third door, and so on. Write a function that takes in an integer numberOfPasses, and returns how many doors are open after the number of passes.
// let n = 7
// let numberOfPasses = 3

// > passDoors(n, numberOfPasses)
// > 4

// Explanation:
// 0 means open, 1 means closed
// Initial: 1 1 1 1 1 1 1
// Pass 1:  0 0 0 0 0 0 0
// Pass 2:  0 1 0 1 0 1 0
// Pass 3:  0 1 1 1 0 0 0

function passDoors(n, numberOfPasses) {
  let doors = [].fill(n);

  for (let i = 1; i <= numberOfPasses; i++) {
    for (let j = i - 1; j < n; j += i) {
      console.log(doors[j]);
      doors[j] = doors[j] === 0 ? 1 : 0;
    }
  }
  let result = doors.filter((door) => door === 0);
  console.log(result); // [0, 0, 0, 0]
  return result.length;
}

console.log(passDoors(7, 3)); // 4
