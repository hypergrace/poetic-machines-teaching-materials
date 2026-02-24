let x = 250;
let y = 125;
let w = 125;
let h = 70;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  let hover = false;
    
  if(mouseY>y && mouseY<y+h && mouseX>x && mouseX < x + w){
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
  
  rect(x,y,w,h);
  
    stroke("black");
  fill("white");
  circle(mouseX,mouseY,5);
  
  
}