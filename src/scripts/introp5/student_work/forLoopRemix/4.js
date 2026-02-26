// s26 art 151 a.r.a. 

function setup() {
  createCanvas(600, 600);
  background(205);
  noStroke();

  let spacing = 10;

  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {

      let offset = (y / spacing) % 2 === 0 ? 0 : spacing / 2;
      let size = map(sin((x + y) * 0.05), -1, 1, 4, 12);

      fill(30, 30, 30);
      ellipse(x + offset, y, size, size);
    }
  }
}
