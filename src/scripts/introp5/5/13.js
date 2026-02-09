let numCells = 50; // number of cells in the row!
let noiseScale = 0.009; // zoom factor of our noise field --- (0.001-0.01)

function setup() {
  createCanvas(600, 600);
  noLoop(); // running this perlin noise algorithm is expensive! 
  noStroke();
  //noiseSeed(1);// randomSeed() but for noise;
  console.log(600*600)
}

function draw() {
  background(220);
  let w = width/numCells;
  let g = 128;
  for(let j = 0; j<numCells;j++){
     for (let i = 0; i < numCells; i++) {
      let n = noise(i*noiseScale,j*noiseScale); // noise generates numbers between 0-1. first param is x, second is y
       fill(n*255); // fill expects 0-255
      square(i * w, j* w, w);
  }
}
  
 
  
}
