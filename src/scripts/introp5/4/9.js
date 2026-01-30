// quadrilateral nested for loop 
// "book style for loop"

let sz = 100; // base size of shape
let spacing = 40; // base spacing between shapes
let offsetD = 5; // amount of change in offset
let y;

function setup() {
  createCanvas(700, 700);
  noFill();
  y = 0; 
  noLoop();
}

function draw() {
  background(240);
 y += 20;
  
 for (let i = 0; i < 50; i++){
    let offset = i * 5;
   stroke(i*5);
   for (let x = 0; x < width-spacing; x+=sz/2){
    quad(x, y + offset, x + sz, y - offset, x+sz, y + sz + offset, x, y + sz-offset);
    offset+=offsetD;
  } 
 } 
 
  
}