let SEED = 46822;

let grid = 5; // "resolution"
let levels = 20; // increments of "height"

// noise multiplier
let noiseScale = 0.015;

// gradient between top and bottom
let hueA = -200; // starting hue of lower levels
let hueB = 575; // end hue of high levels

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100, 255);
  randomSeed(SEED);
  noiseSeed(SEED);
  background(220, 20, 12);
  noLoop();
}

function draw() {
  let cols = floor(width / grid);
  let rows = floor(height / grid);

  for (let k = 0; k < levels; k++) {
    let t = k / levels;

    stroke(lerp(hueA, hueB, t),100, 100);
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let x0 = x * grid;
        let y0 = y * grid;

        // A ----- B
        // |       |
        // |       |
        // |       |
        // C ----- D
        let a = field(x0, y0);
        let b = field(x0 + grid, y0);
        let c = field(x0 + grid, y0 + grid);
        let d = field(x0, y0 + grid);

        let idx = 0;
        if (a > t) idx |= 1;
        if (b > t) idx |= 2;
        if (c > t) idx |= 4;
        if (d > t) idx |= 8;

        if (idx === 0 || idx === 15) continue;
  
        // representation of connection between points
        let ab = interp(x0, y0, a, x0 + grid, y0, b, t);
        let bc = interp(x0 + grid, y0, b, x0 + grid, y0 + grid, c, t);
        let cd = interp(x0 + grid, y0 + grid, c, x0, y0 + grid, d, t);
        let da = interp(x0, y0 + grid, d, x0, y0, a, t);
        
        // draws the segment based on index
        drawCase(idx, ab, bc, cd, da);
      }
    }
  }
}

function field(x, y) {
  //feature scaling
  let nx = x * noiseScale;
  let ny = y * noiseScale;

  let n1 = noise(nx, ny); // primary slope shape
  let n2 = noise(nx * 1, ny * 1.2); // mid detail
  let n3 = noise(nx * 0.7, ny * 0.7);// warping

  //normalizing values
  let v = 0.56 * n1 + 0.26 * n2 + 0.18 * n3;

  
  // centers lower points at the middle
  let cx = width /2;
  let cy = height /2;
  
  v -= 0.17 * (dist(x, y, cx, cy) / (min(width, height) * 0.55));

  // keeps v between 0 and 1 to avoid unstability
  return constrain(v, 0, 1);
}

function interp(x1, y1, v1, x2, y2, v2, thr) {
  
  let t = (thr - v1)/(v2-v1)
  
  t = constrain(t, 0, 1);
  
  return createVector(lerp(x1, x2, t), lerp(y1, y2, t));
}

// draws segment between chosen points
function seg(p, q) {
  line(p.x, p.y, q.x, q.y);
}

// uses index to draw point between edges
function drawCase(idx, ab, bc, cd, da) {
  if (idx === 1 || idx === 14) seg(da, ab);
  else if (idx === 2 || idx === 13) seg(ab, bc);
  else if (idx === 3 || idx === 12) seg(da, bc);
  else if (idx === 4 || idx === 11) seg(bc, cd);
  else if (idx === 6 || idx === 9) seg(ab, cd);
  else if (idx === 7 || idx === 8) seg(da, cd);
  else if (idx === 5) { seg(da, ab); seg(bc, cd); }
  else if (idx === 10) { seg(ab, bc); seg(cd, da); }
}
