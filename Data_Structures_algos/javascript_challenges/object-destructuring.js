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
