//Horizontal Eye
let ori_wsize = 1050;
let ori_hsize = 100;
let levels = 60; //Repitions of growth in the spiral illusion, 60 is the default
/*
As you increase levels, it gets trippier and trippier almost like it is blending in with the resolution and blurs your eye

For the highlight colors, if you go higher than 74 levels, so levels <= 74, you will not see the highlight anymore as much in the middle for some color weys 
*/

//Primary Gradient
let g = 0;
let gD; //Gradient Delta
let gradient; //Color palette

//Secondary Gradient
let v = 0;
let vD; //Gradient Delta 2
let sGradient; //Color palette 2

let canvasX = 800;
let canvasY = 800;

function setup() {
  
  createCanvas(canvasX, canvasY);
  noLoop();
  noStroke();
  randomSeed(random(0,100));
  
  gradient = levels * 90; //Random number that came to my head was 60
  
  sGradient = levels * 23
  
  gD = 1 / gradient * 255;
  vD = 1 / sGradient * 255;
  
}

function draw() {
  background("#8C898C");
  
  for(let i = 0; i < (canvasX/levels); i++){
    for(let i = 0; i <= 360; i++){ //Rotates the circle
      push();
      translate(400, 400);
      rotate(radians(i));
      
        // if(i % 2 == 0){ //If Even turn the ellipse black, otherwise turn it white
        //   fill("BLACK");
        // } else {
        //   fill("WHITE");
        // }
      
      /*
      
      The color descriptions for each fill is for when levels is set to its default number
      
      */
      
      // fill(g, random(0,255), random(0,255)); //explosion of colors, indescribable 
      
      // fill(random(0,250), g, 90); //Neon green highlight with a fade from neon green to black and red
      
      fill(random(0,255), g, v); //Neon blue highlight with a fade from neon blue to purple to red
      
      // fill(random(0,255), v, g); //Light Blue Highlight with a fade from neon blue to neon green to red
      
      // fill(v, random(0,255), g); // Pink highlight with a fade from pink to orange to green
      
      // fill(g, random(0,255), v); //Pink highlight with a fade from pink to blue to green
      
      ellipse(0, 0, ori_wsize, ori_hsize);
      
      
      g+=gD;
      v+=vD;
      pop();
    }
    ori_wsize-=100;
    ori_hsize-=10;
    
  }
 
}