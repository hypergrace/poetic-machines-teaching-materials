let xOffsets = []; // holds many xOffsets
let yOffsets = []; // hold many yOffsets values

let rows = 30; // how many shapes in each row
let spacing; // placeholder so that once we declare the canvas we can calculate the space between circles given the width of the canvas

let jitter = 30;

function setup() {
  createCanvas(1000, 1000);
  // populate the arrays!
  for (let i = 0; i < rows * rows; i++) {
    xOffsets[i] = random(-jitter, jitter);
    yOffsets[i] = random(-jitter, jitter);
  }
  console.log(xOffsets);
  // calculate spacing
  spacing = width / rows;
}

function draw() {
  background(220);

  // i is horizontal mover
  // j is our vertical mover
fill(255);
  let index = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      let x = spacing / 2 + spacing * i;
      let y = spacing / 2 + spacing * j;
      
      
      let d = dist(mouseX,mouseY,x,y)
      let scaling = map(d,0,width/4,1,0);
       scaling = constrain(scaling,0,1);
      
      x += xOffsets[index] * scaling;
      y +=  yOffsets[index] * scaling;
      
      circle(x, y, spacing - 10);
      index++;
    }
  }
  
  noFill();
  circle(mouseX,mouseY,width/4 + jitter);
  
}
