function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 0, 0);
 

  push();
  strokeWeight(5);
  stroke(0, 0, 0);

  for (var y = 20; y < 600; y += 60) {
    for (var x = 20; x < 600; x += 60) {
      fill(255, 255, 255);
      ellipse(x, y, 10, 10);
      
    }
  }
  pop();

  push();
  strokeWeight(5);

  for (var x = -40; x < 600; x += 50) {
    for (var y = 10; y < 600; y += 50) {
      stroke(255, 0, 0);
      line(x + 50, y + 50, x + 50, y + 50);
    }
  }
  pop();

 
  push();
  strokeWeight(1);

  for (var x = 20; x < 600; x += 40) {
   
  stroke(0, 255, 0);
  noFill();
  ellipse(x+10, 0+x/5, 5+x, 5+x/2);
    
  
      
    }
  

pop();
  
   push();
  strokeWeight(1);

  for (var x = 20; x < 600; x += 40) {
   
  stroke(255, 0, 0);
  noFill();
  ellipse(x+10, 50+x/5, 5+x, 5+x/2);
    
    
    }

pop();
  
  
  push();
  noStroke();
  for (var x=0; x<160; x+=40) {
    fill (255, 255, 255);
    square(x+x/2, 410, 20+x/4);
  }
  pop();
  
    push();
  noStroke();
  for (var x=0; x<300; x+=40) {
    fill (255, 255, 255);
    square(x+x/2, 500, 20+x/10);
  }
  pop();
  
  push();
  for (var y = 300; y <600; y += 50) {
  for (var x = 300; x <600; x += 50) {

  stroke(255,255,255);
  line(x, y, 300, 300);
}
}

  pop();
  
  
  //
  
  push();
  for (var y = 300; y <600; y += 50) {
  for (var x = 0; x <300; x += 50) {

  stroke(255,255,255);
  line(x, y, 300, 300);
}
}

  pop();
  
  //
  function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 0, 0);
  print(mouseX, mouseY);

  push();
  strokeWeight(5);
  stroke(0, 0, 0);

  for (var y = 20; y < 600; y += 60) {
    for (var x = 20; x < 600; x += 60) {
      fill(255, 255, 255);
      ellipse(x, y, 10, 10);
      
    }
  }
  pop();

  push();
  strokeWeight(5);

  for (var x = -40; x < 600; x += 50) {
    for (var y = 10; y < 600; y += 50) {
      stroke(255, 0, 0);
      line(x + 50, y + 50, x + 50, y + 50);
    }
  }
  pop();

 
  push();
  strokeWeight(1);

  for (var x = 20; x < 600; x += 40) {
   
  stroke(0, 255, 0);
  noFill();
  ellipse(x+10, 0+x/5, 5+x, 5+x/2);
    
  
      
    }
  

pop();
  
   push();
  strokeWeight(1);

  for (var x = 20; x < 600; x += 40) {
   
  stroke(255, 0, 0);
  noFill();
  ellipse(x+10, 50+x/5, 5+x, 5+x/2);
    
    
    }

pop();
  
  
  push();
  noStroke();
  for (var x=0; x<160; x+=40) {
    fill (255, 255, 255);
    square(x+x/2, 410, 20+x/4);
  }
  pop();
  
    push();
  strokeWeight(5);
  for (var x=0; x<300; x+=40) {
    stroke(255,0,0);
    noFill();
    square(x+x/2, 500, 20+x/10);
  }
  pop();
  
  push();
  for (var y = 300; y <600; y += 50) {
  for (var x = 300; x <600; x += 50) {

  stroke(255,255,255);
  line(x, y, 300, 300);
}
}

  pop();
  
  
  //
  
  push();
  for (var y = 10; y <300; y += 50) {
  for (var x = 10; x <300; x += 50) {

  stroke(255,255,255);
  line(x, y, 300, 300);
}
}

  pop();
  
  
  
 
}


  
  
  
 
}

