// function pattern(n) {

// }

// pattern(6);
let n = 6;
for (var row = 1; row <= n; row++) {
  let str = "";
  for (var col = 1; col <= n; col++) {
    str += "*";
  }
  console.log(str);
}
