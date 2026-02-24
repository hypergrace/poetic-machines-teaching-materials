let x = 200;
let y = 200;

let speed = 2;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
background(0,10);
let l = keyIsDown(LEFT_ARROW);

let r = keyIsDown(RIGHT_ARROW);
  
  if (l === true){
    x-= speed;
  }
  
  if(r === true){
    x+= speed;
  }
  
  
  let up = keyIsDown(UP_ARROW);

let down = keyIsDown(DOWN_ARROW);
  
  if (up=== true){
    y-=speed;
  }
  
  if(down === true){
    y+=speed;
  }
  
  
  if(y>200){
   background("red");
    text("game over! press any key to restart",x,y);
    noLoop();
  }

  
  circle(x,y,20);
 

}

function keyPressed(){
  loop();
}

