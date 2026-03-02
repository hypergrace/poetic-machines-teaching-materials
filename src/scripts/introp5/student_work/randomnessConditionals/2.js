let randomShape = 20;
let numCells = 500;
let noiseScale = 0.05

function setup() {
  createCanvas(900, 900);
  noLoop();
  noStroke();
}

function draw() {
  background(220);
  let w = width/numCells
  
  for (let i = 0; i<numCells; i++) {
    for (let j=0; j<numCells; j++) {
     
      
     let n =  noise (i*0.1, j*0.1);
      fill(n*(0, 255), n*(0, 50), n*(0, 80));
    square(i*w,j*w,45);
    }
  }
 push();
  
  let x=450;
  let y=450;
  
  for (let s = 0; s<900; s++){
    x+= random (-randomShape, randomShape);
    y+= random (-randomShape, randomShape);
   fill (255); 
  square(x, y, 5);
  }
  pop();
  
  
}
