console.log("hey", fn);

function fn() {
  console.log("i'm printed");
}

// function expression can not be used before their declaration.
var fn = function fn() {
  console.log("I'm printed 2");
};
fn();
