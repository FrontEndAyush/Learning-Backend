let n = 6;

for (let row = 1; row <= n; row++) {
  let spaces = n - row;
  let str = "";
  for (let i = 1; i <= spaces; i++) {
    str += " ";
  }
  let colTimes = row + row - 1;

  for (let col = 1; col <= colTimes; col++) {
    str += "*";
  }
  console.log(str);
}
