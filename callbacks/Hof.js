function fun(fn) {
  // fun is a higher order function because it is getting a function as an arguement.
  console.log("Hello Ayush");
  fn();
}
fun(function fn() {
  console.log("hello coder");
});

let arrOfNumbers = [1, 10, 9, 64, 25, 652, 6, 2, 62, 6, 67, 78, 21, 78, 34];
console.log(arrOfNumbers.sort());
