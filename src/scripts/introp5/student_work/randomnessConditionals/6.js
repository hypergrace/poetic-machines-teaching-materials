let space = 3.9;
let bD;
let b = 0;
//when bD is nothing is does something cool
function setup() {
  createCanvas(500, 500);
  noStroke();
  noLoop();
  bD = 500;
  randomSeed(10);
  rectMode(CORNER);
}

function draw() {
  background(200);
  //let w = width/2 what i want to be in let statements
  //let h = height/2
  for (let w = 0; w < 500; w += 5) {
    for (let h = 0; h < 500; h += 5) {
      let x = random(-space, space);
      let y = random(-space, space);
      let b = 225 + h / 350;
      //let b = random(0,255);
      for (s = 0; s < 10; s++) {
        fill(10, 10, b);
        square(x * h, y + w, s + 4);
         b += bD;
      }
    }
  }
}
