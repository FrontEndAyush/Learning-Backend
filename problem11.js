function fabonacci(n) {
  let firstFibonacci = 0;
  let secondFibonacci = 1;

  if (n === 0) {
    console.log(0);
  } else if (n >= 1) {
    console.log(0);
    console.log(1);
  }

  for (let firstRow = 0; firstRow < n - 2; firstRow++) {
    sum = firstFibonacci + secondFibonacci;
    firstFibonacci = secondFibonacci;
    secondFibonacci = sum;
    console.log(sum);
  }
}

fabonacci(6);
