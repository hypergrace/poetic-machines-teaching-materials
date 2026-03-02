let jump = 5; // random limits for drawing coordinates
let maxRepetitions = 10; // how many times the lines will be drawn
let maxLines = 1000; // how many lines per repetition
let maxVerteces = 1000; // Controls how long the lines are
let maxL = 800;
let maxW = 580;
let colorSeed = 49159369; // Controls noise seed and color scheme
let patternSeed = 45678999;// Controls the pattern

// Noise scale grows exponentially
// Recommended values between 0.9 and 0.000001
let noiseScale = 0.003; // 0.003 Miguel's favorite

function setup() {
  createCanvas(maxL, maxW);
  noLoop();
  noFill();
  background('grey');
  noiseSeed(colorSeed);
  randomSeed(patternSeed)
  
  
  // These checks are done to set upper boundaries to the drawing machine
  // and keep a fast drawing time, while protecting the user's computer
  let maxCircles = maxRepetitions * (maxLines * maxVerteces)
  let maxPixel = maxL * maxW
  let pixelsPerCircle = maxPixel / maxCircles
  if (pixelsPerCircle < 10) {
    maxRepetitions = 10;
    maxLines = maxL / 5;
    maxVerteces = maxW / 5;
  }
}

function draw() {
  // background(220);

//   To prevent infinite drawing, we track the number of times drawn
  for(let reps = 0; reps < maxRepetitions; reps++){
      
    for (let j = 0; j < maxLines; j++) {
    // number of lines
    beginShape();
    let x = random(width);
    let y = random(height);

    for (let i = 0; i < maxVerteces; i++) {
//    Noise returns a value between 0 and 1. need to map it to 0 and 255, which is the range of colors
      let r = map(noise(x * noiseScale, y * noiseScale), 0, 1, 0, 255);
      let g = map(noise(x * noiseScale + (x * y * (noiseScale * noiseScale)), y * noiseScale + (x * y * (noiseScale * noiseScale))), 0, 1, 0, 255);
      let b = map(noise(x * noiseScale + (x * y * (noiseScale * noiseScale)), y * noiseScale + (x * y * (noiseScale * noiseScale))), 0, 1, 0, 255);
      
      
//       Initial code from the example given
      // vertex or point in the line
      x += random(-jump, jump);
      if (x > width) {
        x = width;
      }
      if (x < 0) {
        x = 0;
      }

      y += random(-jump, jump);
      if (y > height) {
        y = height;
      }
      if (y < 0) {
        y = 0;
      }
      curveVertex(x, y);

      fill(r, g, b)
      noStroke()
//       Draw a small circle at every vertex
      circle(x,y, random(5,20));
      stroke(r, g, b);
      strokeWeight(random(2,6));
      noFill();
    }
    endShape();
  }
  }
  
}