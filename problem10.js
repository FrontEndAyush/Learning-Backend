

// sum of the given Digit  with array's arrproach

// let a = [4, 1, 3, 6];

// function sumOfDigit(a) {
//   let sum = 0;
//   for (let i = 0; i <= a.length-1; i++) {
//    sum = sum + a[i]
//   }
//   console.log(sum)
// }
// sumOfDigit(a);


// sum of the digit using classical approach

let a = 4136;

function sumOfDigit(a) {
    let sum = 0;
    while (a > 0) {
        sum += a % 10;
        a = Math.floor(a / 10);
    }
    console.log(sum);
}

sumOfDigit(a)

