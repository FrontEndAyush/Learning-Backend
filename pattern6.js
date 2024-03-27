let n = 10;

function upperTringle(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";

    for (let spaces = 1; spaces <= n - row; spaces++) {
      str += " ";
    }
    for (let col1 = 1; col1 <= 2 * row - 1; col1++) {
      str += "*";
    }
    console.log(str);
  }
}

function lowerTringle(n) {
  for (let row = 1; row <= n - 1; row++) {
    let str = "";

    for (let rowSpaces = 1; rowSpaces <= row; rowSpaces++) {
      str += " ";
    }
    for (let col = 1; col <= 2 * (n - row) - 1; col++) {
      str += "*";
    }
    console.log(str);
  }
}

function pattern(n) {
  upperTringle(n);
  lowerTringle(n);
}


pattern(n)
// }
