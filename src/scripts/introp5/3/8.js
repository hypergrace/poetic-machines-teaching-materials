// variables
let d = 20; // diameter of the circle
let r = d / 2; // radius of the circle

let inclineFactor = 5; // how much the circles go down

let xOffset = 20;
let numCircles = 20; // number of circles in each row

function setup() {
  createCanvas(400, 400);
  console.log(r);
}

function draw() {
  background(220);
  // radius is half the diameter
  // diameter is the width of the circle cutting thru its center point
  // radius is the distance between the center of the circle to anywhere on its edge
 

  for (let i = 0; i < numCircles; i = i + 1) {
    // the code I want to repeat!
    
    fill(i*20,200-i*10,0)
    circle(xOffset + d * i, 100 + i * inclineFactor, d); // x,y,d
  }
}
