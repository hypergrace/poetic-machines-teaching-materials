let x,y; // declare both x and y
let jitter = 10;

let numCircles = 1000;

function setup() {
  createCanvas(400, 400);
  noLoop();
  noStroke();
   x = random(width); // initialize them with a random number
   y = random(height); // init w random number
}

function draw() {
  background(220);
 
  for(let i = 0; i < numCircles;i++){
    let w = map(i,0,numCircles,200,1);
    let g = map(i,0,numCircles,0,255);
    x+=random(-jitter,jitter);
     y+=random(-jitter,jitter);
    fill(g);
    circle(x,y,w);
  }
  


}