let employeeName = "Sarthak";

// This the example of block scope because varible has only existense inside the block
{
  let employeeName = "Bhola";
}
function employeeDetails() {
  // This is the example of global scope because we are using employeeName varible inside the function or anywhere we want
  // console.log(employeeName);



}

employeeDetails();
