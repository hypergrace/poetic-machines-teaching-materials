// s26 art 151 r.m.

let numLines = 200
let xSpacing = 8;

function setup() {
  createCanvas(800, 800);
  noFill();
  strokeWeight(1.5);
  noLoop();
}

function draw() {
  background(225);
  
  let yOffset = 0;
  
  // each loop draws one flowing curved line
  for (let i = 0; i < numLines; i += 1) {
    
    // rainbow cycling colors
    let colorShift = map(i, 0, numLines, 0, 245);
    let r = map(sin(i * 0.15), -1, 1, 100, 255);
    let g = map(cos(i * 0.1), -1, 1, 50, 255);
    let b = map(sin(i * 0.2 + 50), -1, 1, 150, 255);
    
    stroke(r, g, b);
    
    beginShape();
    
    // create vertices for wavy line
    for (let x = 0; x < width + 100; x += xSpacing) {
      
      // flowing curve calculation
      let y = height/2 + yOffset;
      let curveAmount = pow((x / width) * i * 0.1, 2);
      let wave = sin((x / 60) + (i * 0.1)) * 50;
      
      yOffset = curveAmount + wave - i * 1.5;
      
      vertex(x, y + yOffset);
    }
    
    endShape();
  }
}