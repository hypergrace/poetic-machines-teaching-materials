// ---- Global Parameters ----
let tileSize = 40;
let gridCols = 16;
let gridRows = 12;

let noiseScale = 0.6;
let glowLayers = 9;
// let rotationAmount = 50; // degrees
let squigglePoints = 6;  // how many vertices in each squiggle
let offset = 0.25 // size of squiggles

let neonPalette;

function setup() {
  createCanvas(800, 600);
  noLoop();
  angleMode(DEGREES);

  // Lock in a final composition
  randomSeed(2026);
  noiseSeed(2021);

  // Neon palette (Rozendaal)
  neonPalette = [
    color(0, 255, 255),   // cyan
    color(255, 0, 255),   // magenta
    color(255, 255, 0),   // yellow
    color(0, 255, 128),   // lime
    color(255, 80, 80)    // hot red
  ];
}

function draw() {
  background(0); // black

  let startX = (width - gridCols * tileSize) / 2;
  let startY = (height - gridRows * tileSize) / 2;

  // ---- Pixel-Neon Squiggle Mosaic ----
  for (let row = 0; row < gridRows; row++) {  // Molnar's Strict grid
    for (let col = 0; col < gridCols; col++) {

      let x = startX + col * tileSize + tileSize / 2;
      let y = startY + row * tileSize + tileSize / 2;

      // Noise-based color drift
      let n = noise(col * noiseScale, row * noiseScale);
      let drift = map(n, 0, 1, -40, 40);  //noise‑based, so each tile shifts slightly


      // Pick a base neon color
      let baseColor = random(neonPalette);

      push();
      translate(x, y);

      // Slight rotation (Molnar rule-breaking)
      // let rot = random(-rotationAmount, rotationAmount);
      // rotate(rot);

      // ---- Draw the glowing squiggle ----
      for (let g = 0; g < glowLayers; g++) {  //Rozendaal's glow
        
        //Outer layers = low alpha (30) → soft glow
        //Inner layers = high alpha (200) → bright core
        let alpha = map(g, 0, glowLayers - 1, 30, 200); 

        //Outer layers = thick (6px) → halo
        //Inner layers = thin (1px) → crisp line
        let weight = map(g, 0, glowLayers - 1, 6, 1);

        stroke(
          red(baseColor) + drift,
          green(baseColor) + drift,
          blue(baseColor) + drift,
          alpha
        );
        strokeWeight(weight);
        noFill();

        beginShape();
        let px = 0;
        let py = 0;

        for (let i = 0; i < squigglePoints; i++) {  //Molnar squiggle
          // Each point deviates slightly from the previous
          px += random(-tileSize * offset, tileSize * offset);
          py += random(-tileSize * offset, tileSize * offset);
          vertex(px, py);
        }

        endShape();
      }

      pop();
    }
  }
}