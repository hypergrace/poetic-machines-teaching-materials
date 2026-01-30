function setup() {
  createCanvas(400, 400);
  //noFill();
}

function draw() {
  background(0);

  let y = width / 2;
  let yOffset = 0;

 
  for (let i = 3; i < 20; i += 0.2) {
    strokeWeight(6)
    let c = map(i,3,20,0,255);
    stroke(c)
    fill(c)
     beginShape();
    for (let x = 0; x < width + width; x += 20) {
      vertex(x-30, y + yOffset);
      yOffset = pow((x / width) * i, 3);
    }
      endShape();
  }
  
  
    for (let i = 3; i < 20; i += 0.2) {
    strokeWeight(6)
    let c = map(i,3,20,0,255);
    stroke(c)
    fill(c)
     beginShape();
    for (let x = 0; x < width + width; x += 20) {
      vertex(x-30, y - yOffset);
      yOffset = pow((x / width) * i, 3);
    }
      endShape();
  }

}
