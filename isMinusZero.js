let x = 0;

// console.log(Object.is(x, -0));

function isMinusZero(x) {
  if (x == 0) {
    return 0;
  } else if (x <= 0) {
    return -1;
  } else {
    return 1;
  }
}
let isTrue = isMinusZero(x);
console.log(isTrue);
