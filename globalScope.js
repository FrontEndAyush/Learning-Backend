var name = "ayush";

function globalScopes() {
  // it is going to throw you a error cuz let flow up to down
  // console.log(x)
  // let x = 10;

  // it is not going to throw you a error cuz let flow up to down and down to up both
  console.log(z);
  var z = 20;
}
globalScopes();
