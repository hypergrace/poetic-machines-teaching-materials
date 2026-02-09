let numCells = 20;

function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
}

function draw() {
  background(220);
  let w = width/numCells;
  let g = 128;
  for(let j = 0; j<numCells;j++){
     for (let i = 0; i < numCells; i++) {
      let r = random(-10,10);
       g += r;
       fill(g)
      square(i * w, j* w, w);
  }
}
  
 
  
}
