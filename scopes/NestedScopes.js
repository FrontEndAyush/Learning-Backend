function fun() {
  var x = 10;
  function gun() {
    let y = 20;
    console.log(x);
    console.log(y);
  }
  gun();
  console.log(x);
  console.log(y);
}
fun();
