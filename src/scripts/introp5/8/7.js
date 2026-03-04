let img1,img2 // declare variables for my images;

// pre load runs even before setup! it will wait until everything is done and loaded beforemoving on with p5.

// transformations: translate, rotate, scale 


let img1a = 0; //angle of rotation for img1
let img1rSpeed = 0.002;// speed of rotation

let img2a = 0; //angle of rotation for img1
let img2rSpeed = -0.0003;// speed of rotation
let img2s = 1;

function preload(){

  img1 = loadImage("/assets/p5img/img1.jpeg");

 img2 = loadImage("/assets/p5img/img2.jpeg");
}

function setup() {
  createCanvas(400, 400);
   img1.resize(600,0);
   img2.resize(600,0);
 
    blendMode(EXCLUSION);
}

function draw() {
  //background(220);
  
  

  // image 2 draw state


  push();
  translate(200,200);
  rotate(img2a)
  scale(img2s);
  image(img2,-img2.width/2,-img2.height/2);
  pop();
  
  img2a+=img2rSpeed;
  
  img2s+=0.001;
  // animation control loop
  if(img2s>2){
    img2s = random(1,2);
    img2rSpeed = random(0.001,0.01);
  }
  
  
 //heres a grid 
    strokeWeight(8);  
  for(let x = 0;x<width;x+=20){

    line(x,0,x,width);
    line(0,x,height,x);
  }
  
  
     // IMAGE 1
  push(); // start image 1 state 
  translate(200,200);
  point(0,0);
  rotate(img1a);
  tint(255,0,0,100);
  image(img1,-img1.width/2,-img1.height/2);// image to show (as a variable), x, y pos (default works like square or rectangle)
  //filter(INVERT);

  filter(BLUR,10);
  pop(); // end image 1 state
  img1a+=img1rSpeed;
  
  
}