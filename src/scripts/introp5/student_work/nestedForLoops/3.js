let vertLine = 0; // number of pixels from top and bottom of canvas
let xSpacing = 20;
let numLines = 50;

let colors; //my colors

let speed = 2;

function setup() {
  createCanvas(600, 600);

  frameRate(5);

  colors = [
    color(136, 207, 240), // baby blue
    color(139, 69, 19), //brown
    color(255, 245, 200), // yellow
  ];
}

function draw() {
  background(220);
  strokeWeight(20);

  //Line movement- referenced from p5 website

  let xOffset = (frameCount * speed) % xSpacing;
  let yOffset = (frameCount * speed) % xSpacing;

  // rules for conditions:
  // (start; stop; change)
  // book style: visual results
  // index style: thinking in terms of repeatitions

  //vertical lines
  for (let i = 0; i < numLines; i++) {
    stroke(random(colors)); // picks random color of y, brown or blue

    line(25 + xSpacing * i, vertLine, 50 + xSpacing * i, height - vertLine); //draws my line, referenced from prof Grace instructor video
  }

  //horizontal lines
  for (let i = 0; i < numLines; i++) {
    let c = random(colors);
    stroke(red(c), green(c), blue(c), 120); // changes opacity

    let y = 25 + xSpacing * i + yOffset; // y position of each horizontal line
    line(vertLine, y, width - vertLine, y);
  } //draws horizontal line
}
