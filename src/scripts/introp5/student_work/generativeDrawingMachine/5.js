
let numCells = 2; // number of cells in the row
let noiseScale = 0.001; // zoom factor of our noise filled
let distance = 300;
let maxOpacity = 50;

function setup() {
  createCanvas(500, 500);
  background("#A692EB");
  noLoop();
  randomSeed(0)
}
function draw() {
  w = width / numCells;
  for (let x = 0; x < w; x ++) {
    for (let y = 0; y < w; y ++) {
      let n = noise(x * noiseScale, y * w * noiseScale);
      let xJump = random(-distance, distance);
      if (x>distance/6){
        xJump=8
      }
      if (x<distance/10){
        xJump=n*x
      }   
      fill(n * 10, 20, 0, n * maxOpacity);
      for (let i = 0; i < 100; i++) 
      square(x * xJump, y * xJump, 100 - i * 2);
      rStroke = random(0, 255);
      stroke(rStroke, 255, 50,);
  
   
    }
  }
}