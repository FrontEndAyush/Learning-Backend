
function async() {
  console.log("Starting!");
  setTimeout(() => {
    setTimeout(() => {
      console.log("hello boi")
    }, 5000);
  }, 4000);
}
function async2() {
  console.log("Starting1!");
  setTimeout(() => {
    console.log("I'm Done2");
  }, 2000);
}


async();
async2();
