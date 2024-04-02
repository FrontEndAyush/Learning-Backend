let firstSide = 10;
let secondSide = 10;
let thirdSide = 15;

if (
  firstSide === secondSide &&
  secondSide === thirdSide &&
  thirdSide === firstSide
) {
  console.log("This is a Equilateral Tringle!");
} else if (firstSide === secondSide || secondSide === thirdSide || thirdSide  === firstSide){
  console.log("isoceles")
} 
 else {
  console.log("This is a  Scalene Triangle!");
}
