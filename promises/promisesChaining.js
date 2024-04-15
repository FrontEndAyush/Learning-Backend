function promiseObj() {
  return new Promise(function executor(resolve, reject) {
    resolve(23);
  });
}
let promiseObjFunc = promiseObj();
promiseObjFunc.then(function onfulfull(value) {
  console.log(value);
});
// let aStorer = a.then(function executor2(value) {
//   console.log("Returned by second promise", value);
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("ayush");
//     }, 5000);
//   });
// });

// aStorer.then(function executor3(value) {
//   console.log(value);
// });
