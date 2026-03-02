// CUSTOMIZEABLE GLOBAL VARIABLES//

let compSeed= 374;
let lockSeed = false;

//Toggle for random offsets for sphere centers
let randomOffsetsOn = false;
let randomRangeX = 150;
let randomRangeY = 120;

// Controls Line Density of Spheres
let numCols = 500;
let numRows = 60;

// Noise and Distortion of Spheres
let noiseScale = 5; // variety of texture
let warpAmountY = 2.75; // 0-10: Warps Vertically, higher number, increases y
let warpAmountX= 25; // Warps horizontally to the right

// Number of Spheres wanted in each Row and Column
let sphereCols = 10;
let sphereRows = 10;

// Alternating sphere sizes by row
let bigR = 150; //radius for even rows
let smallR= 120; //radius for odd rows

// Sphere Apperance 
let falloff = 40.0; // 0-100, small fallout- large fallout
let thresh = 0.003;  // higher amount = less overlap, 0-1 constraint

// Layout Spacing of Spheres (Variables are 0-1)
let marginX = 0.0;
let marginY = 0;
let useOffset = true; // a brick pattern
let rowDrift = 0; //0 = straight

// CUSTOMIZEABLE COLORS//

let centerHex = '#E5F169'; // center
let rimHex = '#FF0000'; // rim
let bgHex = '#86D8FD'; // background color

let rimStrength = 2; // rim density

//FRAME DESIGN
let designScale = 0.8;
let designOffsetX = -100;
let designOffsetY = 0;


//MAIN ENGINE//

let xSpacing, ySpacing; //spacing between texture line
let spheres = []; //stores all sphere data

let centerColor, rimColor, bgColor;

function setup() {
  createCanvas(600, 400);
  
  //Seed setup
  if (!lockSeed) {
  compSeed = Math.floor(Math.random() * 1000);
  }
  randomSeed(compSeed);
  noiseSeed(compSeed); // locks noise pattern
  
  console.log("Seed:", compSeed);
  
  //Color Conversion
  centerColor = color(centerHex);
  rimColor = color(rimHex);
  bgColor = color(bgHex);
  
  //Calculate spacing between texture lines
  xSpacing = width / numCols;
  ySpacing = height / numRows;
  
  //Creates sphere position
  makeSpheres();
  
  noLoop();
}

function makeSpheres (){
  spheres = [];
  
  //Places spheres across canvas
  for (let j = 0; j < sphereRows; j++) {
    for (let i = 0; i < sphereCols; i++) {
      
      //Centers sphere across width and height
      let baseX = map(i, 0, sphereCols - 1, width * marginX, width * (1 - marginX));
      
      let baseY = map(j, 0, sphereRows -1,
                     height * marginY,
                     height * (1 -marginY));
      
      //Optional brick-style horizontal offset
      let xOffset = 0;
      if (useOffset && (j % 2 !== 0)) { 
        xOffset = width / (sphereCols *2);
      }
    
      //Optional vertical shift per row
      let yOffset = map(noise(j *0.5), 0, 1, -rowDrift, rowDrift);
    
      // Alternate Sphere Size Every Other Row
      let r = (j % 2 === 0) ? bigR : smallR;
      
      //Toggleable Random
      let dramaticX = randomOffsetsOn ? random(-randomRangeX, randomRangeX) : 0;
      let dramaticY = randomOffsetsOn ? random(-randomRangeY, randomRangeY) : 0;      
    
      //Store Sphere data
      spheres.push({
        x: baseX + xOffset + dramaticX,
        y: baseY + yOffset + dramaticY,
        r: r
        });
      
    }
  }
}

function draw() {
  
  background(bgColor);
  push();
  
  translate(width / 2 + designOffsetX, height / 2 + designOffsetY);
  
  scale(designScale);
  
  translate(-(width / 2 + designOffsetX), -(height / 2 + designOffsetY));
  
  
  //SPHERE DETAILS AND TEXTURE//
  
  //Vertical Grid Texture
  
  for (let j = 0; j < numRows; j++){
    for (let i = 0; i < numCols; i++){
      
      //Tranform grid index to pixel coordinates
      let x = xSpacing * i;
      let y = ySpacing * j;
      
      // noise variation for texture
      let n = noise(i * noiseScale, j * noiseScale);
      
      // Field for sphere
      let field = 0;
      
      for (let k = 0; k < spheres.length; k++){
        let dx = x - spheres[k].x;
        let dy = y - spheres[k].y;
        
      // distance relative to sphere radius
        let d2 = (dx * dx + dy * dy) / (spheres[k].r * spheres[k].r);
        
      // Guassian Falloff creates sphere shape
        field += Math.exp(-d2 * falloff);
      }
      let s = constrain(field, 0,1);
      
      // separate spheres 
      if (s < thresh) continue;
      
      // Radial coloring
      
      let t = pow(1 - s, rimStrength);
      let c = lerpColor(centerColor, rimColor, t);
      
      //Warping
      let localWarpY = warpAmountY * (0.3 + 2.2 * s);
      let localWarpX = warpAmountX * (0.3 + 2.2 * s);

      
      // Line Opacity
      let alphaVal = 40 + 180 * s;
      
      //Strokeweight lines
      let sw = 0.2 + 3.0 * s +1.2 * (n - 0.5);
      sw = constrain(sw, 0.1, 10);
      
      strokeWeight(sw);
      stroke(c);
      
      // Horizontal Distortion 
      let xOffset = n * xSpacing * localWarpX;
      
      // Vertical distortion
      let y1= y + n * ySpacing * localWarpY;
      let y2 = (y + ySpacing) - n * ySpacing * localWarpY;
      
      line(x + xOffset, y1, x + xOffset, y2);     
    
    }
  } 
  pop(); //
}