function setup() {
  createCanvas(1000, 1000);
  background(0);

  noFill();
  rectMode(CENTER);
  
}

function draw() {
  
  center = 500
  strokeWeight(3);
  
  count =  100 - abs(100 - (frameCount % 200))
 
  for (let x = 50; x <= width; x += 100) {
    for (let y = 50; y <= height; y += 100) {
      
      stroke(0 + count, 255, 255 - count); 
      for (let size = 10; size <= 80; size += 20) {
        rect(x, y, size + count, size + count);
      }

      stroke(255 - count, 255, 0 + count); 
      for (let size = 5; size <= 70; size += 15) {
        ellipse(x, y, size - count, size - count);
      }
      
    }
  }
}
