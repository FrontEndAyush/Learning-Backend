// so the callBack function is higher order function becasue it taking function as argument.
// and the function callback is taking is callback function.

function callBack(fun) {
  console.log("hello Ayush!");
  fun();
}

callBack(function fun() {
  console.log("Hello jaan!");
});
