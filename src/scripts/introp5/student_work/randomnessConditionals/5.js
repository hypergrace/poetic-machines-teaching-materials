let cell = 20;
let scale = 0.08;
let t = 0;

function setup() {
  createCanvas(500, 500);
  noStroke();
  noiseDetail(4, 0.5);
  noiseSeed(7);
  noLoop();
}

function draw() {
  background(230);

  for (let x = 0; x < width; x += cell) {
    for (let y = 0; y < height; y += cell) {
      let n = noise(x * scale, y * scale);

      if (n < 0.35) {
        fill(40);
        rect(x, y, cell, cell);

        if (n > 0.32) {
          fill(220);
          rect(x + cell * 0.45, y + 2, cell * 0.1, cell - 4);
        }
      } else {
        let hNoise = noise(x * scale + 100, y * scale + 100);
        let h = map(hNoise, 0, 1, cell * 0.3, cell * 2.8);

        let c = map(n, 0.35, 1, 80, 200);
        fill(c);

        let pad = 3;
        rect(x + pad, y + cell - h, cell - 2 * pad, h);

        if (h > cell * 1.2) {
          fill(255, 230);
          rect(x + pad + 2, y + cell - h + 4, 3, 6);
          rect(x + pad + 8, y + cell - h + 10, 3, 6);
        }
      }
    }
  }
}

// function keyPressed() {
//   if (key === 'r' || key === 'R') {
//     noiseSeed(floor(random(10000)));
//     redraw();
//   }
// }
