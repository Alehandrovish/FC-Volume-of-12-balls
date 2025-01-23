const NumOfBalls = 12;
const OuterDiametr = 0.5; //m
const wallWidth = 10e-3; //mm to m
let innerDiametr = OuterDiametr - 2 * wallWidth;
let innerRadius = 0;
let sumofInnerVolume = 0;
for (let i = 1; i <= NumOfBalls; i++) {
  innerRadius = innerDiametr / 2;
  let Volume = (4 / 3) * Math.PI * innerRadius ** 3;
  console.log("Volume " + i + ": " + Volume + " m^3");
  sumofInnerVolume += Volume;
  innerDiametr += wallWidth * 2;
}
console.log("Sum Of Volumes: " + sumofInnerVolume + " m^3");
