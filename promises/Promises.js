function getRandomNumber() {
  return Math.random() * 100;
}

function creatingPromisesWithLoop() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering in Executor funciton!");
    if (true) {
      resolve(1);
    } else {
      reject(2);
    }
    console.log("Getting out of executor function!");
  });
}
console.log("Starting.");
let x = creatingPromisesWithLoop();
console.log("In this time our promise is ", x);
x.then(
  function onFulfillment(value) {
    console.log("Our Promise is fullfilled", value);
  },
  function onrejected(value) {
    console.log("Our Promise is Rejected", value);
  }
);
console.log("hello world.");
