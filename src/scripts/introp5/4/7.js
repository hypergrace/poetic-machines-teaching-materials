let xD = 50; // spacing between x points
let layers = 50;
let pD = 5; // change in our p variable

function setup() {
  createCanvas(400, 400);
  noLoop();
  noStroke();
}

function draw() {
  background(255,0,100);
  // top of canvas
  for(let p = 0; p<layers;p+=pD){
    let g = map(p,0,layers,0,255);
    fill(50,g,200);
     beginShape();
  for(let x = -width/2; x<width+width;x+=xD){
    let f = x/width * p;
  
    let y = (width/2) - pow(f,2);
   vertex(x,y);
  }
  endShape();
  }
  
  
  // bottom of the canvas
   for(let p = 0; p<layers;p+=pD){
    let g = map(p,0,layers,0,255);
    fill(200,g,50);
     beginShape();
  for(let x = -width/2; x<width+width;x+=xD){
    let f = x/width * p;
  
    let y = (width/2) + pow(f,2);
   vertex(x,y);
  }
  endShape();
  }
  
  
 
}