let hover;

let xSpeed = []; // speeds of our particles
let ySpeed = []; // speeds of our particles

let x = []; // x pos of our particle
let y = []; // y pos of our particle

let numParticles = 200;

function setup() {
  createCanvas(1000, 1000);
  
  // populate the arrays 
  for(let i = 0; i< numParticles;i++){
    xSpeed[i] = random(-3,3);
    ySpeed[i] = random(-3,3);
    x[i] = 700;
    y[i]= 700;
  }
  
}

function draw() {
  background(220);
 
  
  let d = dist(mouseX,mouseY,700,700);
  
  if (d < 100){
    hover = true;
  }
  else {
    hover = false;
  }
  
    
    for(let i=0;i<numParticles;i++){
       circle(x[i],y[i],2);     
      // movement is either expanding outwards
      if(hover==true){
        x[i]+=xSpeed[i];
        y[i]+=ySpeed[i];
      }
      // contracting back towards the circle
       else {
        x[i] = lerp(x[i],700,0.01);
        y[i] = lerp(y[i],700,0.01);
      }
      // bounce code to constrian to the canvas
      if (x[i]>width){
        xSpeed[i] *= -1;
      }
      if(x[i]<0){
      xSpeed[i] *= -1;
      }
      
        if (y[i]>height){
        ySpeed[i] *= -1;
      }
      if(y[i]<0){
      ySpeed[i] *= -1;
      }
     
       circle(700,700,200);
      
    }
 
  
  
  
  
}