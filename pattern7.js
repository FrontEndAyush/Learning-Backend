let n = 49;

function upperPattern(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    for (let col = 1; col <= row; col++) {
      str += "*";
    }
    for (let spaces = 1; spaces <= n - (row + row); spaces++) {
      str += " ";
    }
    for (let row2 = 1; row2 <= row; row2++) {
      str += "*";
    }
    console.log(str);
  }
}

function middlePattern(n) {
  let str = "";
  for (let row = 1; row <= n; row++) {
    str += "*";
  }
  console.log(str);
}

function lowerPatter(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    for (let col = 1; col <= (n - 1) / 2 - row + 1; col++) {
      str += "*";
    }

    for (let spaces = 1; spaces <= 2 * row - 1; spaces++) {
      str += " ";
    }

    for (let col = 1; col <= (n - 1) / 2 - row + 1; col++) {
      str += "*";
    }
    console.log(str);
  }
}
function pattern(n) {
  upperPattern(n);
  middlePattern(n);
  lowerPatter(n);
}
pattern(n);
