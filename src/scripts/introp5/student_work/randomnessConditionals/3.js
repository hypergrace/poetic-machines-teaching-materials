let numLines = 25;
let pointsPerLine = 100;
let noiseScale = 0.008;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  fill(0, 0, 0, 25);
  rect(0, 0, width, height);
  
  let t = frameCount * 0.01;

  for (let i = 0; i < numLines; i++) {
    
    // Line color
    let r = map(sin(i * 0.5 + t), -1, 1, 100, 255);
    let g = map(cos(i * 0.3 + t), -1, 1, 80, 255);
    let b = map(sin(i * 0.7 + t), -1, 1, 150, 255);
    
    stroke(r, g, b, 200);
    strokeWeight(2);
    noFill();
    
    beginShape();
    
    // Flowing trail
    for (let j = 0; j < pointsPerLine; j++) {
      
      // 3D noise (x, y, time) creates flowing motion
      let offset = j * noiseScale;
      let noiseX = noise(i * 0.3, offset, t);
      let noiseY = noise(i * 0.3 + 100, offset, t + 50);
      
      let x = width/2 + map(noiseX, 0, 1, -350, 350);
      let y = height/2 + map(noiseY, 0, 1, -350, 350);
      
      let pulse = sin(j * 0.1 + t * 2 + i) * 20;
      
      curveVertex(x + pulse, y);
    }
    
    endShape();
  }
}