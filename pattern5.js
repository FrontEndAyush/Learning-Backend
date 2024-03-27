let n = 6;

for (let row = 1; row <= n; row++) {
  let stars = n - row + 1;
  let str = "";
  for (let col = 1; col <= stars; col++) {
    str += "*";
  }
  console.log(str)
}

// for (let i = n; i <= n; i--) {
//   if (i < 1) {
//     break;
//   }
//   console.log(i);
// }
