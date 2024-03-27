let a = 28;
let b = 24;
let divisibleNumber;
for (let i = 2; i <= Math.min(a, b); i++) {
  if (a % i === 0 && b % i === 0) {
    divisibleNumber = i;
  }
}
console.log("The Best Hcf is ", divisibleNumber);
