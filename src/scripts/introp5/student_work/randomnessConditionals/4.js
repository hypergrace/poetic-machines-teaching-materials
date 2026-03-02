//global variables

let numCols = 220; // vertical segments
let numRows = 70; // horizontal segments
let xSpacing, ySpacing;

let noiseScale = 0.01; // smoothness or texture
let warpAmount = 1.6; // bending of lines

let spheres = [];

// MAIN

function setup() {
  createCanvas(800, 600);


  xSpacing = width / numCols; 
  ySpacing = height / numRows; 
  
  // sphere positions and offset positioning
  
  let cols = 10;
  let rows = 5;
  
  for (let j =0; j< rows; j++){
    for (let i=0; i < cols; i++) {
      
      let baseX = map(i, 0, cols -1, width * 0.12, width * 0.88);
      let baseY = map(j, 0, rows -1, height * 0.12, height * 0.88);
      
      //offset positioning
      let offsetAmount= width / (cols *2);
      let xOffset = (j % 2 === 0) ? 0 : offsetAmount;
      
      // vertical movement
      yDrift = 0;
      
      // varied sphere size using noise
      let r;
      if (j % 2 === 0){
        r = 260; //big sphere row
      }
      else{
        r = 140;
      }

      
      spheres.push({
        x: baseX + xOffset,
        y: baseY + yDrift,
        r: r
      })
    }
  }
  noLoop();
}
function draw() {
  background(225);
  
  translate(width/2, height/2);
  scale(1.20);
  translate(-width/2, -height/2);
  
  for (let j = 0; j < numRows; j++){
    
    for (let i = 0; i < numCols; i++) {
      
    
    // grid position into pixel position
      let x = xSpacing * i;
      let y = ySpacing * j;
    
    // texture
      let n = noise( i * noiseScale, j * noiseScale);
      
      let field = 0;
      
    for (let k = 0; k < spheres.length; k++) {
        let dx = x - spheres[k].x; // horizontal distance from sphere center
        let dy = y - spheres[k].y; // vertical distance
        
        let distance2 = (dx * dx + dy * dy) / (spheres[k].r * spheres[k].r); // more instense texture near center
        
        field += Math.exp(-distance2 *30.0);
      }
    
     let s = constrain(field, 0, 1); // helps with overlap and keeps values bettween 0 and 1
      
      if (s < 0.08){
        continue;
      }
      
      //SPHERE DETAIL AND TEXTURE
      
      let localWarp = warpAmount * (0.3 + 2.2 * s); // warps inside sphere
      
      let alphaVal = 40 + 180 * s; // makes it darker inside sphere
      
      let sw = 0.2 + 3.0 * s + 1.2 * (n- 0.5); //noise and thicker lines
      
      sw = constrain(sw, 0.1, 10); // contraints noise and weight
      
      strokeWeight(sw);
      stroke(20, alphaVal);
      
      let y1 = ySpacing * j +n * ySpacing * localWarp;
      let y2 = ySpacing * (j+1) -n * ySpacing *localWarp;
      
      line(x,y1, x, y2);
    }
  }
}