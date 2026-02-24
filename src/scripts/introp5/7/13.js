let r = 100;
// thi runs onces
function setup() {
  createCanvas(400, 400);
  background(0);
  console.log("setup");
  
}
// this runs continuously 
function draw() {
  background(0,10);
  stroke(r,0,200);
  
 
  let d = dist(mouseX,mouseY,pmouseX,pmouseY);
  
  let w = map(d,0,70,0,30);
  
  strokeWeight(w);
 console.log("draw");
 
}

function mousePressed(){
 r = random(0,255);
  console.log("pressed");
}

function mouseDragged(){
  
   line(mouseX,mouseY,pmouseX,pmouseY);
  console.log("dragged");
}