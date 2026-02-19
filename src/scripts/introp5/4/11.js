let wD = 1; // the difference between circle widths
let jitter = 30;
let rJitter = 4; // potential jump in red color space

function setup() {
  createCanvas(800, 800);
  noStroke();
  noLoop();
}

function draw() {
  background(255);
  // for loop to count w! 
  let x = width/2;
  let y = width/2;
  let r = 128;
  for(let w = width/2;w>50;w-=wD){
  let g = map(w,width/2,50,0,255);
    fill(r,g,100);
    x+=random(-jitter,jitter);
    y+=random(-jitter,jitter);
    r+=random(-rJitter,rJitter)
  circle(x,y,w);
  }
  
}