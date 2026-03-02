let density;
let fragments;
let chaos;
let opacity;

function setup() {
  createCanvas(900, 900);
  density = 9;      // Grid cells
  fragments = 25;   // Rects per cell
  chaos = 180;      // Position scatter
  opacity = 45;     // Transparency
  randomSeed(777);
  noiseSeed(777);
  noLoop();
}

function draw() {
  background(5, 5, 15);
  let margin = 50;
  let cell = (width - margin * 2) / density;
  
  for (let i = 0; i < density; i++) {
    for (let j = 0; j < density; j++) {
      let baseX = margin + i * cell + random(-chaos, chaos);
      let baseY = margin + j * cell + random(-chaos, chaos);
      
      for (let k = 0; k < fragments; k++) {
        let x = baseX + random(-60, 60);
        let y = baseY + random(-60, 60);
        let w = random(10, 70);
        let h = random(10, 70);
        
        let r = map(noise(i * 0.15, k * 0.1), 0, 1, 80, 255);
        let g = map(noise(j * 0.2), 0, 1, 30, 180);
        let b = map(noise(k * 0.12), 0, 1, 160, 60);
        
        if (random() > 0.4) { fill(r, g, b, opacity); } else { noFill(); }
        stroke(r, g, b, opacity + 30);
        strokeWeight(random(0.5, 2.5));
        rect(x, y, w, h);
      }
    }
  }
}