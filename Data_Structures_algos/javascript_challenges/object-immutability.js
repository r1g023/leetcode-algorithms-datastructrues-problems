const user = {
  name: "john",
  age: 99,
  country: "USA",
  isMarried: false,
};

user["name"] = "joe";

console.log(user);
delete user["isMarried"];
// wh
let z = Object.isExtensible(user);

let y = Object.defineProperty(user, "isAdmin", {
  value: false,
  writeable: true,
  enumerable: true,
});
console.log(z);
console.log(y); // { name: 'joe', age: 99, country: 'USA', isAdmin: false }

// * Object immutability-----------------------------------------------------------------------------
// ? 1. Prevent Extensions
// ?  2. Using the seal() method
// ? 3. using the freeze() method

// * Prevent Extension
// * prevent extension is used to prevent the addition of new properties to an object, but we can delete / update an existing property
// TODO ----- CRUD - Create Read *[Update]* *[Delete]*
//can not property to an object,
let userResult = Object.preventExtensions(user);
console.log(userResult);
user["phone"] = "12345"; // can't be added due to preventExtensions
user["name"] = "johnny"; // can be updated to change from Joe to Johnny
//can DELETE user["isAdmin"] if wanted to
console.log(user);

// * what is Seal method - can not add new property, can not delete property, can update property
// TODO ----- CRUD - Create Read *[Update]* Delete
let sealUser = Object.seal(user);
user["name"] = "tom"; // can be updated to change from 'johnny' to 'tom'
delete user["name"]; // can't delete property
console.log(sealUser); // { name: 'tom', age: 99, country: 'USA', isAdmin: false }

// * freeze() method - can't implement CRUD
// ? IT DOES NOT WORK ON NESTED OBJECT PROPERTY VALUES
// TODO ----- CRUD - Create Read Update Delete
const frozenUser = Object.freeze(user);

user["name"] = "tommy";
delete user["country"];
console.log(frozenUser === user); // true
console.log(user);

// TODO ----- CRUD - Create Read *[Update]* Delete
// Shallow vs Deep Freeze
let config = {
  db: "postgresql",
  host: "acme-ind.com",
  password: "fake-password",
  port: 512,
  admin: {
    // nested property objects can be updated
    name: "larry",
    rights: ["create", "update", "delete"],
  },
};

const frozenConfig = Object.freeze(config);
config["db"] = "mysql"; // can't be updated
config["admin"]["name"] = "johnny"; // Nested property object can be updated
console.log(frozenConfig);

// * Deep Freeze an object
let deepFreeze = (obj) => {
  console.log("obj--->", obj);
  Object.keys(obj).forEach((key) => {
    console.log("key--->", key);
    if (typeof obj[key] === "object") {
      deepFreeze(obj[key]);
    }
  });
  Object.freeze(obj);
};
deepFreeze(frozenConfig);
config.db = "mysql";
config.admin.name = "Someone Else";
console.log(config);

// * Deep Freeze an array, arrays are mutable, but can be frozen if necessary
let array = [1, 2, 3, 4];
let frozenArray = Object.freeze(array);
// array.push(5);
// array.pop(6)
array.length = 0;

const numbers = [3, 4, 10, 20];

const getLessThanFive = (num) => num < 5;
const moreThanFive = (num) => num > 5;

const lesserThanFive = numbers.filter(getLessThanFive);
console.log(lesserThanFive);
const morerThanFive = numbers.filter((num) => num > 5);
morerThanFive;
