let x = 200;

let y = 200;
let w = 100;
let h = 50;
let score = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let hover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;

  if (hover && mouseIsPressed) {
    fill("blue");
    x = random(width);
    y = random(height);
    score++;
    console.log("score " + score);
  } else if (hover) {
    fill("green");
  } else {
    fill("red");
  }

  rect(x, y, w, h);
}
