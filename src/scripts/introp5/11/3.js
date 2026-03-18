let monkey; 
// transparent backgrounds are only possible in png! 

let amp = 1; // thge amplitude of the monkey's circular movement
// we want theLFO to change the amplitude of the monkey's circular movement

let LFOa = 0; // angle for a sin wave that changes our amplitude
let LFOamp = 100; // maximum amplitude of the LFO 
let LFOspeed = 0.001; // small values cause it's slower! 

let a = 0; 
function preload(){
  monkey = loadImage("/assets/p5img/monkey.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
 // background(220);
  // LFO code replacing basic animation loop
  
  LFOa+=LFOspeed; //update the LFO angle with the lfospeed
  amp= sin(LFOa)*LFOamp; 
  //console.log("monkey's amplitude " + amp);
  
  
  
  // basic animation loop
//   amp++;
  
//   if (amp > 500){
//     amp = 0;
//   }
  
  let x = sin(a) * amp + 200;  
  let y = cos(a) * amp + 200;
  translate(x,y)
  rotate(a)
  image(monkey,0,0);
  a+= 0.02;

}