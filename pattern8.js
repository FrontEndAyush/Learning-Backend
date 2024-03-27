let n = 5;

for (let row = 1; row <= n; row++) {
  let str = "";

  for (let spaces = 1; spaces <= n - row; spaces++) {
    str += "  ";
  }
  let counter = 1;
  for (let col = 1; col <= row; col++) {
    str += counter + " ";
    counter++;
  }

  let counter2 = row - 1;
  for (let col2 = 1; col2 <= row - 1; col2++) {
    str += counter2 + " ";
    counter2--;
  }
  console.log(str);
}
