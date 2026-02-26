// art 151 s26 r.r.

let xD = 4; // point spacing

function setup() {
  createCanvas(900, 700);
}

function draw() {
  let color1 = color(136, 207, 240, 180); //baby blue
  background(color1);

  translate(-200, -300);
  scale(1);
  strokeWeight(2);

  let color2 = color(160, 160, 160, 180); // gray

  for (let i = 0; i < 50; i++) {
    beginShape();
    noFill();
    stroke(0, 40);
    for (let x = -width; x < width + width; x += xD) {
      // base from lecture, moves inner loop across the x direction
      let f = (x / width) * i; // ?? changes shape??

      let wave = 100 * sin(f * 2 - frameCount * (0.01 + i * 0.001)); //WAVE SHAPE AND MORE

      let y = height / 15 + 4 * pow(f, 2) + wave; // wave curves

      let gradient = map(wave, -50, 50, 0, 1);

      let changeColor = lerpColor(color1, color2, gradient);

      vertex(x, y);

      // dot details
      let dotSize = map(wave * 0.05, -50, 50, 1, 15); // dots on wave

      noStroke(); // removes outline for dots
      fill(changeColor);
      let dotOffset = 20 * sin(f * 2 - frameCount * 0.5 + PI / 2); // dots follow sine wave

      ellipse(x, y + dotOffset, dotSize, dotSize);

      stroke(0, 40);
    }
    endShape();
  }
}
