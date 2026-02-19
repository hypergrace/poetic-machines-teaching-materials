let margin = 100;
let xOffset = 20;
let yOffset = 5;
let jitter = 6;

let noiseScale = 0.009;

let xNoise = 0; 

function setup() {
  createCanvas(800, 800);
  noLoop();
  noStroke();
}

function draw() {
   background(128,0,200);


  for (let x = margin; x < width - margin; x += xOffset) {
    let r = 128;
    for (let y = margin; y < height - margin; y += yOffset) {
     let n = noise(x * noiseScale, y * noiseScale) 
      let w = n * xOffset;
      // let w = xOffset-2
      // noise outputs values between 0 and 1
      fill(r, 0, 200);
      
       xNoise += map(n,0,1,-jitter,jitter);
      
      circle(x + xNoise, y, w);
      r += random(-jitter, jitter);
      
    }
  }
}
