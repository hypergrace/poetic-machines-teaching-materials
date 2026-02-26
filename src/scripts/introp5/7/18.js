let x = 200;
let y = 200;

let targetX = 200;
let targetY = 200;

let speed = 2;

let lerpV = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for(let h = 0; h<height;h+=10){
    line(0,h,x,y);
    line(width,h,x,y);
  }
  circle(targetX,targetY,20);
  
  x = lerp(x,targetX,lerpV);
  y = lerp(y,targetY,lerpV);
  if(keyIsDown(DOWN_ARROW)){
    targetY+=speed;
  }
   if(keyIsDown(UP_ARROW)){
    targetY-=speed;
  }
   if(keyIsDown(LEFT_ARROW)){
    targetX-=speed;
  }
   if(keyIsDown(RIGHT_ARROW)){
    targetX+=speed;
  }
  
}