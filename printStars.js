// let n = 6;

// for (let row = 1; row <= n; row++) {
//   let str = "";
//   for (let col = 1; col <= row; col++) {
//     str += "*";
//   }
//   console.log(str)
// }

// let n = 6;

// for (let row = 1; row <= n; row++) {
//   let str = "";
//   for (let underLine = 1; underLine < n; underLine--) {
//     str += "_ ";
//   }
//   console.log(str);
// }

let n = 6;

for (let row = 1; row <= n; row++) {
  // first loop started for row
  let str = "";

  // str init
  let spaces = n - row;
  for (let i = 1; i <= spaces; i++) {
    str += " ";
  }

  // for col
  for (let col = 1; col <= row; col++) {
    str += "*";
  }
  console.log(str);
}
