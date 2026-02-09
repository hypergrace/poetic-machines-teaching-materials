let jitter = 20; // control the jump size of our random walk
let numSteps = 200; // number of steps in the walk

let noiseScale = 0.009;// zoom factor for our noise field
let maxW = 30; // max width of our circles
let maxOpacity = 100; // max opacity of our circles 

function setup() {
  createCanvas(700, 700);
  noLoop();
  // noiseSeed(10);
  // randomSeed(6);
}

function draw() {
  background(255);
  
  let x = width/2;
  let y = height/2;
  beginShape();
  for(let i = 0;i<numSteps;i++){
    let n = noise(i*noiseScale); // noise generates values between 0 and 1
    x+=random(-jitter,jitter);
    y+=random(-jitter,jitter);
    curveVertex(x,y);
    fill(0,n*maxOpacity);
    noStroke();
    circle(x,y,n*maxW);
  }
  stroke(0);
  noFill();
  endShape();
  
}