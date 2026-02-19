let margin = 50;
let xOffset = 10;
let yOffset = 20;

let xJitter1 = 0;
let jitter = 20;

let noiseScale = 0.004; 

function setup() {
  createCanvas(800, 800);
  noLoop();
  noFill();
}

function draw() {
  background(220);
  for (let y = margin; y < height - margin; y += yOffset) {
    for (let x = margin; x < width - margin; x += xOffset) {
      let w = noise(x*noiseScale,y*noiseScale) * jitter; // 1, 2, or 3 variables
  // noise generates values between 0 and 1
     
      let r = random(40,70);
      let g = random (200,255);
      let b = random (150, 255);
      
      stroke(r,g,b);
      
      let sw = random(0,10);
      
      strokeWeight(sw);
      
      circle (x,y,w)

 
    }
  }
}
