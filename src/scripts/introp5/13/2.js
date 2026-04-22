// GLOBAL VARIABLES
let candy;

let spriteW,spriteH;// width and height in pixels of each candy icon or sprite INSIDE the candy image

let sheetCols = 6;
let sheetRows = 4;

// for each Candy
let candyXOffset;
let candyYOffset; 

let bonbons = [];// array that will hold all the bonbon objects~!
let numBonbons = 200;

function preload () {
  candy = loadImage("/assets/p5img/candy2.jpg");
}

function setup() {
  createCanvas(800, 800);
  // global variable that we need in order to figure out where in the image we're grabbing our candy sample (which candy!)
  spriteW = candy.width/sheetCols;
  spriteH = candy.height/sheetRows;
  // bonbon factory
 
  for(let i = 0; i < numBonbons;i++){
    // temporary variable in the local scope of this for loop inside the setup function
    let b = new Bonbon();
     bonbons[i] = b;
    // bonbons.push(b); // add the end of that array
    
  }

}

function draw() {
  background(220);

  // iterating through an array
 for(let i = 0;i<numBonbons;i++){
   bonbons[i].checkHover();
   bonbons[i].show();
 }
  
  
}

// written the blueprint for our Bonbon 
class Bonbon {
  constructor(){
    this.candyColsOffset = floor(random(0,sheetCols));
    this.candyRowsOffset = floor(random(0,sheetRows));
    this.dx = random(width); // x on the canvas
    this.dy = random(height); // y on canvas
    this.dWidth = 80; // width of the image on the canvas
    this.dHeight = 80; // height of the image on the canvas
    this.sx = this.candyColsOffset * spriteW;
    this.sy = this.candyRowsOffset * spriteH;
    this.sWidth = spriteW;
    this.sHeight = spriteH; 
    this.appear = true;
  }
  show(){
    if(this.appear == true){
      
    image(candy,this.dx, this.dy, this.dWidth, this.dHeight, this.sx, this.sy, this.sWidth, this.sHeight);
    }
  }
  checkHover(){
    if(mouseX > this.dx && mouseX < this.dx + this.dWidth && mouseY > this.dy && mouseY < this.dy + this.dHeight && mouseIsPressed == true){
      this.appear = false;
    }
  }
}

