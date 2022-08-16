// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 liters of water per hour of cycling.
// Write a function that takes in the number of hours and returns the number of liters Nathan will drink, rounded to the smallest value.
// Example:
// $ getLitersOfWater(3)
// 1
// $ getLitersOfWater(6.7)
// 3
// $ getLitersOfWater(11.8)
// 5

function getLitersOfWater(hours) {
  return Math.floor(hours * 0.5);
}

console.log(getLitersOfWater(3)); // 1
console.log(getLitersOfWater(6.7)); // 3
console.log(getLitersOfWater(11.8)); // 5
