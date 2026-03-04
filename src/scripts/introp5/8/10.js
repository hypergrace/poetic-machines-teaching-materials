let img;

let a=0;//angle of rotation
let rSpeed = 0.1;//speed of rotation


let scaleFactor = 1;


function preload(){
 img = loadImage("/assets/p5img/pixelart.png");
}

function setup() {
  createCanvas(800, 800);
 
  imageMode(CENTER); // do the same thing for images! 
  noStroke()




}

function draw() {
  background(10);
  
  translate(mouseX,mouseY);
  rotate(a);
  scale(scaleFactor);
  a+=rSpeed;
  image(img,0,0);
  
  
  if(mouseIsPressed){
    scaleFactor+=0.03;
    rSpeed+=0.001;
  }
  else {
    scaleFactor-=0.03;
    rSpeed-= 0.001;
    if (scaleFactor < 1){
      scaleFactor = 1;
    }
    if (rSpeed< 0.1){
      rSpeed = 0.1;
    }
    
  }
  
  
}