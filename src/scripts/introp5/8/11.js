let img;

let a=0;//angle of rotation
let rSpeed = 0.1;//speed of rotation


let x = 400;
let xSpeed = 1;
let xDir = 1; // SWITCH! either 1 or -1;
let y = 200;

let scaleFactor = 2;

let shuteWidth = 400;
let shuteX = 200;

function preload(){
 img = loadImage("/assets/p5img/pixelart.png");
}

function setup() {
  createCanvas(800, 800);
 
  imageMode(CENTER); // do the same thing for images! 
  noStroke();
}

function draw() {
  background(10);
  fill("blue");
  rect(200,0,width/2,height);
  translate(x,y);
  rotate(a);
  scale(scaleFactor);
  a+=rSpeed * xDir;
  image(img,0,0);
  
  
  x+=xSpeed*xDir;
  scaleFactor+=0.03;
  if (x>=shuteX+shuteWidth-img.width*scaleFactor/2 || x<=shuteX + img.width*scaleFactor/2){
    xDir *= -1;
      x+=xSpeed*xDir;
  }
  
  y+=5;
  
  if (y >= height +img.height*scaleFactor/2){
    y = -img.height*scaleFactor/2;
    scaleFactor = 1;
    x = width/2;
  }

  
}