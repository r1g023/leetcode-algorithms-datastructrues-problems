// Async => Not ocurring at the same time

// fetch data from server
// want to execute something with a delay
// want to execute something after an event

// 1. Browser APIs / Web APIs
// 2. Promises
// 3. JAvaScript is synchronous by default
// 4. Async => operations are very normal using browser APIS, event handelers, promises
// 5. callbacks are great notification mechanism for
// 6. Promises with its states, values are on excellent way to handle async alls.

function f1() {
  console.log("f1");
}

function f2() {
  setTimeout(() => {
    console.log("f1 stack"); // runs f1() stack
    f1();
  }, 3000);
}

function f3() {
  console.log("f3 stack"); // runs first
  setTimeout(() => {
    // web api stack
    console.log("f2 stack"); //runs f2() stack
    f2();
  }, 4000);
}

f3();

// Promises
// Promise is an object that represents a value that may not be available yet.
const promise = new Promise(function (resolve, reject) {
  resolve(`I'm a resolved\n promise`); // if promise is not resolved, reject() is called
  reject(new Error("Error, can't fetch"));
});

promise
  .then((result) => {
    console.log("RESULTT--->", result);
  })
  .catch((error) => {
    console.log("error--->", error);
  });

function executePromise() {
  promise
    .then((result) => {
      console.log("RESULTT--->", result);
    })
    .catch((error) => {
      console.log("error--->", error);
    });
}

// executePromise();
// Promises
// Promise is an object that represents a value that may not be available yet.

// ? PROMISE MORE ADVANCED METHODS
let getUser = new Promise(function (resolve, reject) {
  const user = {
    name: "John",
    email: "james@example.com",
    password: "password",
    permission: ["db", "admin", "user"],
  };
  resolve(user);
});

getUser
  .then((response) => {
    console.log(response);
    if (response.permission.includes("users")) {
      throw new Error("you are not allowed to see this");
    }
    return response;
  })
  .then((email) => {
    console.log(email.email);
  })
  .catch((error) => {
    console.log(error);
  });
