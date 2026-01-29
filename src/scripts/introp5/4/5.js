// make our own variables: let, var, const
// let is modern in JS
// var is older way
// const is constant and so you can't change it
// use let!

// declare global variables (not in use yet!)
let d = 40; // diameter of my circle
let r = d / 2; // radius of the circle
let xSpacing = 50; // pixels between the center of each circle HORIZONTALLY
let ySpacing = 0; // pixels between the center of each circle VERTICALLY
let rows = 100;
let cols = 10;
let yD = 0.1; // the difference in ySpacing

let sw = 0.01;


function setup() {
  createCanvas(400, 400);
  console.log(d);
  noFill();

  stroke("rgb(94,255,0)");
  noLoop(); // sets p5 so the draw loop only runs one
}

function draw() {
  background(0);
  
  // index style increments by 1 
  // book style increments by something concrete in the sketch (like x position);
  
  // i is the index for the COLUMN loop number
  // j is the index for the ROW loop number
  // start/init; check to see if the code loops again; changes!

  for (let j = 0; j < rows; j++) {
       strokeWeight(sw);
      sw+= 0.5;
    for (let i = 0; i < cols; i++) {
      line(xSpacing * i - r, ySpacing * j - r, r + xSpacing * i, ySpacing * j + r);
      circle(xSpacing * i, ySpacing * j, d); //center x, center y,diameter
      ySpacing+=yD;
    }
  }
}
