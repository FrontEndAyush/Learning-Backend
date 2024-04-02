function isPrimeNumber(x) {
  let result = "";
  for (let i = 2; i <= x - 1; i++) {
    if (x % 2 == 0) {
      console.log("not a prime Number");
      break;
    } else {
      result = "prime Number"
    }
  }
  console.log(result)
}
isPrimeNumber(9);
