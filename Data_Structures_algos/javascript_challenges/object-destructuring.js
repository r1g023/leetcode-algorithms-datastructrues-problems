// ? Method 1
const employee = {
  id: 007,
  alias: "jAMES",
  dept: {
    id: "D1",
    dept_name: "spy",
    address: { street: "30 london st", city: "Chelsea" },
  },
};

const { alias: name } = employee;
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

console.log(name);
console.log(address); // { street: '30 london st', city: 'Chelsea' }
console.log(city); //Chelsea
console.log(dept_name); //Spy

// ? Method 2
function logAgent({ alias, dept }) {
  console.log(alias, dept);
}

logAgent(employee);

// ? Method 3
function getUser() {
  return { username: "james", age: 100 };
}

const { age, username } = getUser();
console.log(username, age); // james, 100

// ? Method 4 - destruture an array of objects wiht a for loop
const users = [
  { username: "james", age: 100 },
  { username: "john", age: 99 },
  { username: "jane", age: 98 },
];

for (let { username, age } of users) {
  console.log(username, age); // prints out key value pairs of each object
}

// * SCOPES *
// block scope, let and var are accessible within the block
{
  var user = "james";
  let user1 = "john";
  const user2 = "jane";
}

console.log(user, user1);

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
  console.log(user6, user, user1); //variables are accessible
}
globalScope();

// object reassignment
let blog = {
  url: "google.com",
};
