// Async => Not ocurring at the same time

// fetch data from server
// want to execute something with a delay
// want to execute something after an event

// 1. Browser APIs / Web APIs
// 2. Promises

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
    console.log("f2 stack"); //runs f2() stack
    f2();
  }, 4000);
}

f3();

new Promise(function (resolve, reject) {});
