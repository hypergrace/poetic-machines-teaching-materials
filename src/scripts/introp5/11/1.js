let monkey;

let headX = 125; 
let headY = 125;

let r = 50;

let ballOn = true; 


function preload(){
  monkey = loadImage("/assets/p5img/monkey.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(monkey,0,0);
  
  push();
  noFill();
  stroke("red");
  circle(headX,headY,r*2);
  pop();

  let d =dist(mouseX,mouseY,headX,headY);
  
 let hover = d<r;
  
  if(hover){
    ballOn = false;
  }
  
  if(ballOn){
    circle(mouseX,mouseY,10);
  }

}