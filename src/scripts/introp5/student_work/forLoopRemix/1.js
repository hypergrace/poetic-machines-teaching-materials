//ab art 151 s26

let numShapes = 220;
let xOffset = 15;
let spacing;
// https://p5js.org/reference/p5/ellipse/
// https://p5js.org/reference/p5/color/
//https://youtu.be/POn4cZ0jL-o
function setup() {
  createCanvas(480, 480);
  spacing = (width - xOffset * 2) / numShapes;
  //width,height (480,480)
  noLoop();
}

function draw() {
  background(5, 5, 20);
  //let r = map(i, 0, numShapes, 255, 40);
  for (let i = 0; i < numShapes; i += 1) {
    
    
    let x = xOffset + i * spacing;
    
    let r = map(i, 0, numShapes, 255, 40);
    let g = map(i, 0, numShapes, 60, 255);
    let b = map(i, 0, numShapes, 180, 90);
    
    
    stroke(r, g, b);
    strokeWeight(map(i, 0, numShapes, 0.1, 6));
    let y = map(i, 0, numShapes, 0, height);
    let y2 = map(i, 0, numShapes, height, 0);
    let shapesize = map(i, 0, numShapes, 80, 2);
    
    
// fill(color size)
    fill(b, r, g, 60);
    rect(x, y - shapesize * 3, shapesize / 2, shapesize * 5);
    rect(x + shapesize * 2, y2, shapesize * 4, shapesize / 3);
    rect(width - x, y, shapesize / 4, shapesize * 2);
    
    noFill();
    stroke(g, b, r, 140);
    // ellipse()

    ellipse(x * 2, y + shapesize, shapesize * 3, shapesize / 2);
    ellipse(x / 2, y2 - shapesize, shapesize, shapesize * 4);
    
    stroke(r, b, g, 100);
    strokeWeight(map(i, 0, numShapes, 0.3, 3));
    line(x, 0, width - x * 2, y2);
    line(x * 3, height, x / 2, y);
    line(0, y, width, y2);
  }
  
  for (let j = 0; j < width; j += spacing * 2) {
    
    
    
    let r = map(j, 0, width, 80, 255);
    let g = map(j, 0, width, 255, 50);
    let b = map(j, 0, width, 120, 220);
    
    let xPos = map(j, 0, width, width / 2, width);
    let yPos = map(j, 0, width, height / 3, height);
    let shapesize = map(j, 0, width, 3, 60);
    

    
    noStroke();

  }
  for (let k = 0; k < height; k += spacing * 5) {
    
    
    let r = map(k, 0, height, 200, 100);
    let g = map(k, 0, height, 100, 240);
    let b = map(k, 0, height, 255, 80);
    
    stroke(r, g, b, 150);
    strokeWeight(map(k, 0, height, 5, 0.5));
    

    
    fill(g, b, r, 60);
    rect(k, k / 2, 40, 10);
    ellipse(width - k, k, 20, 50);
    
    //console.log(mouseX, mouseY);

  }
}