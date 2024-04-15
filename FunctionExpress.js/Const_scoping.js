//console.log(teacher) // temperal deadzone is also available for const as well as let because both are block scoping.

//const teacher = "ayush";
//console.log(teacher)

// const Student = 'Sarthak';
// console.log(Student.val = "ayush")
// console.log(Student)

//var temp = 100;
//const temp = 200; // going to throw you an error that temp is already been declared because in the parsing it knows that varible is already declared.
//console.log(temp)

let  teacher = "ayush";
function fun() {
  teacher = "sarthak";
  console.log(teacher);
}
fun();
