function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);

  let spacing = 15;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      let d = dist(x, y, width / 2, height / 2);
      let size = 10 + 8 * sin(frameCount * 0.05 + d * 0.1);

      fill(100 + d * 0.3, 150, 255);
      circle(x, y, size);
    }
  }
}
