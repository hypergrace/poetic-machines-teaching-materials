// declare our variables 
// 3 ways to declare a variable: const; var; let 

let d = 3; // diameter of the circle
let r = d / 2; // calculate the radius 
let xOffset = 0; // left hand margin (not including the radius of the circle)

let numCircles = 200; // control the number of circles

function setup() {
  createCanvas(400, 400);
  console.log(d,r);
}

function draw() {
  background(220);
  
  
 for (let i = 0;i<numCircles;i=i+1) {
    // and to repeat it!!! for a certain number of times
  circle(xOffset+d*i,100,d);
  }
  
  
}