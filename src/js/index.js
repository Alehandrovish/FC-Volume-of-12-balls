const NUM_OF_BALLS = 12;
const MIN_OUTER_DIAMETR = 0.5; //m
const WALL_WIDTH = 10e-3; //mm to m
let innerDiametr = MIN_OUTER_DIAMETR - 2 * WALL_WIDTH;
let innerRadius;
let sumofInnerVolume = 0;
for (let i = 1; i <= NUM_OF_BALLS; i++) {
  innerRadius = innerDiametr / 2;
  let Volume = (4 / 3) * Math.PI * innerRadius ** 3;
  console.log("Volume " + i + ": " + Volume + " m^3");
  sumofInnerVolume += Volume;
  innerDiametr += WALL_WIDTH * 2;
}
console.log("Sum Of Volumes: " + sumofInnerVolume + " m^3");
