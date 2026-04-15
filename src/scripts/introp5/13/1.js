// birds 
// global control of how many birds
let numBirds = 50;
let birds = []; // an array that holds all of our birds!!!

// here are the arrays that keep track of all the different variables associated with each bird


let flapA = 0;
let flapSpeed = 2;

function setup() {
  createCanvas(800, 200);
  //strokeWeight(10);
  angleMode(DEGREES); // angles are between 0 - 360;
 // noLoop();
  
  // bird factory --- use our Bird class!!! to make new birds and! to them in an array
  for(let i = 0; i<numBirds;i++){
   birds[i] = new Bird();
  }
  console.log(birds);
}

function draw() {
  background(220);
  
 
  for (let i = 0; i < numBirds;i++){
    birds[i].show();
    birds[i].flap();
    birds[i].move();
    birds[i].check();
  }
  
}
// blueprint for a bird 
class Bird {
  // inside the constructor instructiors for what to make when! we make a new Bird!
  constructor(){
    this.x = random(width);
    this.y = random(0,200);
    this.amp = random(5,30);
    this.speed = random(1,2);
    this.flapA = 0; 
    this.flapSpeed = random(1,3);
  }
  // methods ! things that our bird does! 
  show(){
    
     // changing the angle of each wing
     let a = map(sin(this.flapA),-1,1,30,120); // sin gives values between -1 and 1;

      // a should between 30 and 120;
     let a1 = map(a,0,120,180,60);
    
    strokeWeight(this.amp/5); 
     // left wing
     let leftX = this.x - sin(a) * this.amp;
     let leftY = this.y - cos(a) * this.amp;
     line(leftX, leftY ,this.x,this.y);
//     // right wing
     let rightX = this.x + sin(a1) * this.amp;
     let rightY = this.y + cos(a1) * this.amp;
    
    line(this.x,this.y,rightX,rightY);
   }
  
  flap(){
    this.flapA += this.flapSpeed;
  }
   move(){
     this.x+=this.speed;
   }
  check(){
    if(this.x>width+this.amp){
      this.x = -this.amp;
    }
  }
  
  
}