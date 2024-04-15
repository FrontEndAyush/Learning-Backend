console.log(teacher); // going to throw undefined becasue var is function scope it available in up to down and also down to up.

var teacher = "Sanket"; // global variable.

function fun() {
  // var teacher = "Ayush";
  console.log(teacher);
}
fun();
