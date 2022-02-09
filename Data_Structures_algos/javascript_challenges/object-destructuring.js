// ? Method 1
const employee = {
  id: 007,
  alias: "jAMES",
  power: true,
  dept: {
    id: "D1",
    dept_name: "spy",
    address: { street: "30 london st", city: "Chelsea" },
  },
};

const { alias: names } = employee;
const { id: userID } = employee;
const { power: userPopwer } = employee;
const {
  dept: { address: deptAddress },
} = employee;
console.log(userID, userPopwer);
console.log(deptAddress);

// DESTRUCTURING OBJECTS
const {
  dept: { address },
} = employee;

const {
  dept: {
    address: { city },
  },
} = employee;

const {
  dept: { dept_name },
} = employee;

console.log(names);
console.log(address); // { street: '30 london st', city: 'Chelsea' }
console.log(city); //Chelsea
console.log(dept_name); //Spy

// ? Method 2
function logAgent({ alias, power }) {
  console.log(alias, power);
}

console.log(logAgent(employee));

// ? Method 3
function getUser() {
  return { username: "james", age: 100 };
}
const { age, username } = getUser();
console.log(username, age); // james, 100

function getLocation() {
  return { place: "atlantis", location: "north" };
}
const { place, location } = getLocation();
console.log(place); //atlantis, north

// ? Method 4 - destruture an array of objects wiht a for loop
const users = [
  { username: "james", age: 100 },
  { username: "john", age: 99 },
  { username: "jane", age: 98 },
];

for (let { username, age } of users) {
  console.log([username, age]); // prints out key value pairs of each object
}

// * SCOPES *
// block scope, let and var are accessible within the block
{
  var user = "james";
  let user1 = "john";
  const user2 = "jane";
}

console.log(user);

// function scope, variables are not accessible
function userScope() {
  var user3 = "jack";
  let user4 = "frost";
  const user5 = "doe";
}
userScope();

// global scope
let user6 = "jamie";
function globalScope() {
  console.log(user6, user); //variables are accessible
}
globalScope();

// object reassignment
let blog = {
  url: "google.com",
};

// ? sorting names
{
  function ascendingComp(a, b) {
    return a - b;
  }

  let artists = ["John", "zeonardo", "charles", "Anna", "Barent"];

  console.log(artists.sort()); //[ 'Anna', 'Barent', 'John', 'charles', 'zeonardo' ]
  artists.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
}

// ? Sorting numbers
{
  let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
  console.log(ages);
  ages.sort(); // [ 10, 1000, 12, 2, 21, 23, 3, 30 ]
  console.log(ages); // [ 10, 1000, 12, 2, 21, 23, 3, 30 ]

  // * function(a,b) {return a-b} ascending
  ages.sort(function (a, b) {
    return a - b;
  });
  console.log(ages); // [2, 3, 10, 12, 21, 23, 30, 1000]
  //same in ascending order
  ages.sort((a, b) => a - b);

  // * function(a,b) {return b-a} descending
  ages.sort(function (a, b) {
    return b - a;
  });
  console.log(ages); // [1000, 30, 23, 21, 12, 10, 3, 2]
}

// ? Sorting non-ASCII characters
{
  let items = ["communiqué", "zèbre", "adieu", "éclair"];

  items.sort();
  console.log(items); // * [ 'adieu', 'communiqué', 'zèbre', 'éclair' ]

  items.sort((a, b) => a.localeCompare(b));
  console.log(items); // * ['adieu', 'communiqué', 'éclair', 'zèbre']
}

// ? Sorting object
{
  let users = [
    { name: "Bob", address: "Huston", dob: "February 9, 1991", income: 87654 },
    { name: "Joe", address: "London", dob: "July 1, 1986", income: 47974 },
    { name: "Carl", address: "Bangalore", dob: "Dec 25, 1982", income: 97351 },
    { name: "Carl", address: "Lagos", dob: "March 19, 2001", income: 57753 },
  ];
  // console.table(users);

  // * Sort by names - Ascending
  users.sort(function (a, b) {
    console.log(a.name, b.name);
    let left = a.name;
    let right = b.name;

    // ? shorter way
    // ******************************** return left === right ? 0 : left > right ? 1 : -1;
    if (left === right) {
      console.log(0);
      return 0;
    } else if (left < right) {
      // * left > right ASCENDING || left < right DESCENDING!
      console.log(1, left, right);
      return 1;
    }
    console.log(-1, left, right);
    return -1;
  });
  console.table(users);

  // * Sort by address - Descending
  users.sort(function (a, b) {
    let left = a.address;
    let right = b.address;
    return left === right ? 0 : left > right ? -1 : 1;
  });
  // console.table(users)

  // * Sort by income - Ascending
  users.sort((a, b) => a.income - b.income);
  // console.table(users);

  // * Sort by income - Descending
  users.sort((a, b) => b.income - a.income);
  // console.table(users);

  // * Sort by dob - Ascending
  // console.log(new Date('March 19, 2001')); // Date object
  users.sort((a, b) => new Date(a.dob) - new Date(b.dob));
  // console.table(users);

  // * Sort by dob - Descending
  users.sort((a, b) => new Date(b.dob) - new Date(a.dob));
  // console.table(users);
}
