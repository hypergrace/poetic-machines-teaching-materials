let gridSize = 50;
let lineWeight = 3;
let c = 8;
let glowAlpha = 180;

function setup() {
  createCanvas(400, 400);
  noLoop();
  rectMode(CENTER);
  noiseSeed(77);
  //randomSeed(47);

}

function draw() {
  background(35, 35, 45);
  
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      stroke(80, 80, 90, 60);
      strokeWeight(1);
      noFill();
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  
  stroke(0, 255, 100, glowAlpha);
  strokeWeight(lineWeight * 0.8);
  noFill();
  let pathX = gridSize + random(-c, c);
  let pathY = height - gridSize + random(-c, c);
  for (let i = 0; i < 8; i++) {
    let tog = random(0, 1);
    let newX = pathX;
    let newY = pathY;
    
    if (tog > 0.5) {
      newX = pathX + gridSize + random(-c, c);
    } else {
      newY = pathY - gridSize + random(-c, c);
    }
    
    line(pathX, pathY, newX, newY);
    
    let tog2 = random(0, 1);
    if (tog2 > 0.7) {
      noStroke();
      fill(0, 255, 100, glowAlpha);
      let w = random(20) * 0.3 + 3;
      circle(pathX, pathY, w);
      stroke(0, 255, 100, glowAlpha);
      strokeWeight(lineWeight * 0.8);
      noFill();
    } else {
    }
    
    pathX = newX;
    pathY = newY;
  }
  
  stroke(255, 150, 0, glowAlpha * 0.9);
  strokeWeight(lineWeight * 0.6);
  pathX = width - gridSize * 2 + random(-c, c);
  pathY = gridSize + random(-c, c);
  for (let i = 0; i < 6; i++) {
    let tog = random(0, 1);
    let newX = pathX;
    let newY = pathY;
    
    if (tog > 0.4) {
      newY = pathY + gridSize + random(-c, c);
    } else {
      newX = pathX - gridSize + random(-c, c);
    }
    
    line(pathX, pathY, newX, newY);
    pathX = newX;
    pathY = newY;
  }
  
  for (let x = gridSize; x < width - gridSize; x += gridSize) {
    for (let y = gridSize; y < height - gridSize; y += gridSize) {
      let w = 20;
      let tog = random(0, 1);
      let n = noise(x * 0.02, y * 0.02);
      
      if (tog > 0.7) {
        stroke(255, 0, 180, glowAlpha);
        strokeWeight(lineWeight);
        noFill();
        
        w = gridSize * 0.8 + random(20);
        let cx = x + random(-c, c);
        let cy = y + random(-c, c);
        
        let bit = c;
        let x1 = cx - w/2 + random(-bit, bit);
        let y1 = cy - w/2 + random(-bit, bit);
        let x2 = cx + w/2 + random(-bit, bit);
        let y2 = cy - w/2 + random(-bit, bit);
        let x3 = cx + w/2 + random(-bit, bit);
        let y3 = cy + w/2 + random(-bit, bit);
        let x4 = cx - w/2 + random(-bit, bit);
        let y4 = cy + w/2 + random(-bit, bit);
        
        line(x1, y1, x2, y2);
        line(x2, y2, x3, y3);
        line(x3, y3, x4, y4);
        line(x4, y4, x1, y1);
      } else {
        let tog2 = random(0, 1);
        if (tog2 > 0.6) {
          stroke(255, 0, 180, glowAlpha * 0.6);
          strokeWeight(lineWeight * 0.7);
          w = random(20) + 10;
          line(x, y, x + random(-c * 2, c * 2), y + random(-c * 2, c * 2));
        } else {
        }
      }
    }
  }
  
  for (let x = gridSize * 1.5; x < width; x += gridSize * 2) {
    for (let y = gridSize * 1.5; y < height; y += gridSize * 2) {
      let w = 20;
      let tog = random(0, 1);
      let n = noise(x * 0.03, y * 0.03);
      
      if (tog > 0.5) {
        let tog2 = random(0, 1);
        if (tog2 > 0.5) {
          stroke(0, 100, 255, glowAlpha);
          strokeWeight(lineWeight * 0.8);
          noFill();
          w = random(20) + 15;
          let cx = x + random(-c, c);
          let cy = y + random(-c, c);
          
          let bit = w * 0.2;
          let x1 = cx - w/2 + random(-bit, bit);
          let y1 = cy - w/2 + random(-bit, bit);
          let x2 = cx + w/2 + random(-bit, bit);
          let y2 = cy - w/2 + random(-bit, bit);
          let x3 = cx + w/2 + random(-bit, bit);
          let y3 = cy + w/2 + random(-bit, bit);
          let x4 = cx - w/2 + random(-bit, bit);
          let y4 = cy + w/2 + random(-bit, bit);
          
          line(x1, y1, x2, y2);
          line(x2, y2, x3, y3);
          line(x3, y3, x4, y4);
          line(x4, y4, x1, y1);
        } else {
          stroke(255, 50, 50, glowAlpha);
          strokeWeight(lineWeight);
          noFill();
          w = random(20) * 0.6 + 5;
          
          let cx = x + random(-c, c);
          let cy = y + random(-c, c);
          let bit = w * 0.3;
          
          line(cx - w/2 + random(-bit, bit), cy + random(-bit, bit), cx + w/2 + random(-bit, bit), cy + random(-bit, bit));
          line(cx + random(-bit, bit), cy - w/2 + random(-bit, bit), cx + random(-bit, bit), cy + w/2 + random(-bit, bit));
        } 
      } else {
        let tog2 = random(0, 1);
        if (tog2 > 0.7) {
          stroke(0, 255, 100, glowAlpha * 0.8);
          strokeWeight(lineWeight * 0.5);
          w = random(20) * 0.4;
          let cx = x + random(-c, c);
          let cy = y + random(-c, c);
          line(cx - w, cy, cx + w, cy);
          line(cx, cy - w, cx, cy + w);
        } else {
        }
      }
    }
  }
  
  for (let x = 20; x < width; x += 30) {
    for (let y = 20; y < height; y += 30) {
      let w = 20;
      let tog = random(0, 1);
      
      if (tog > 0.92) {
        noStroke();
        fill(255, 0, 180, glowAlpha + 50);
        w = random(20) * 0.3 + 2;
        circle(x + random(-c, c), y + random(-c, c), w);
      } else {
        let tog2 = random(0, 1);
        if (tog2 > 0.95) {
          noStroke();
          fill(255, 50, 50, glowAlpha);
          w = random(20) * 0.4 + 2;
          square(x + random(-c, c), y + random(-c, c), w);
        } else {
        }
      }
    }
  }
}