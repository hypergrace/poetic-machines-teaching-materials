let a = 0; // the angle of rotation for shape one
let rSpeed = 0.02; // the speed of rotation
let w = 75; // square width

let a2 = 0; // angle of rotation for shape 2 
let rSpeed2 = -0.05;// speed of rotation for shape 2

// setup runs once at the start to "set things up"
function setup() {
  createCanvas(400, 400);
  //   noStroke();
  strokeWeight(4);
  noFill();
}
// draw loops continuously thereafter
function draw() {
  background(255);

  // the point around which a shape rotates is called the point of origin.
  // the default point of origin is the top left corner in p5
  // the point of origin is always 0,0
  // so --> to rotate a shape, we want to change the point of origin.
  // --> translate(); AND THEN rotate();
  
  // SHAPE 1 // push and pop are ways of isolating drawing states
  push(); // starts the drawing state, it remembers translate, rotate -- this also remembers fill, stroke, 
  translate(50, 50); // it takes 2 values: they are added to the current point of origin.
  // for(let x = 0;x<width;x+=20){
  //   line(x,0,x,height);
  //   line(0,x,width,x);
  // }
  
   point(0,0); // point of origin
   rotate(a);
  fill('red');
  square(-w/2, -w/2, w); // the x and y coordinates are the top left! 
    pop(); // we end the drawing state and forget the translation,rotation, fill, stroke
    a+=rSpeed; //update the angle of rotation for shape 1
  
  // SHAPE 2 
  push();
  translate(200,200);
  rotate(a2);
  square(-w/2,-w/2,w);

  pop();
  
  a2 += rSpeed2; // update the angle of rotation for shape 2
  
  
} // the end of the draw loop ALSO forgets or ends the drawing state
