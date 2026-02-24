let x = 250;
let y = 125;
let w = 125;
let r = w/2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  let hover = false;

   let d = dist(mouseX,mouseY,x,y);
   console.log(d, r);
  
  if(d < r){
    hover = true;
  }
  else {
    hover = false;
    
  }
  
  // button functionality
  if(hover && mouseIsPressed){
    stroke("blue");
    fill("purple");
  }
  else if (hover){
    stroke("black")
    fill("green"); 
  }
  else {
    stroke("black");
    noFill();
  }
  
  circle(x,y,w);
  
    stroke("black");
  fill("white");
  circle(mouseX,mouseY,5);
  
  
}