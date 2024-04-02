function isEven(x) {
  if (x % 2 == 0) {
    return "Even";
  } else {
    return "odd";
  }
}

for (let i = 1; i <= 20; i++) {
  let result = isEven(i);
  console.log(i, "is " + result);
}

