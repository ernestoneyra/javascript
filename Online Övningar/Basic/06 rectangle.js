let sideA = 5;
let sideB = 6;
let sideC = 9;

let perimeter = (sideA + sideB + sideC)/2;

let area = Math.sqrt((perimeter*(perimeter - sideA)*(perimeter - sideB)*(perimeter - sideC)));

console.log(area);