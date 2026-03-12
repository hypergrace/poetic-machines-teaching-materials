let spritesheet; // declare image variable globally
let landscape; // variable for bg image
let rain;

let rainSound; // rainsound 
let speech; 

// source image variables -- spritesheet! where are we in the spritesheet!
let sw = 32;
let sh = 32;

let sx = 0;
let sy = 0;

// destination variables -- where does the spritesheet go in the canvas??

let dx = 0; // canvas position
let dy = 0; // canvas y pos
let dw = 200; // width is the diameter, radius is diameter / 2
let dh = 200;

// runs before setup!
function preload() {
  // gets the image ready for p5
  spritesheet = loadImage("/assets/p5Img/rainguy/spritesheet.png");
  landscape = loadImage("/assets/p5Img/rainguy/landscape.jpg");
  speech = loadImage("/assets/p5Img/rainguy/speechBubble.png");
  rain = loadImage("/assets/p5Img/rainguy/rain.png");
  rainSound = loadSound("/assets/p5Img/rainguy/rain.mp3");
}

function setup() {
  createCanvas(532, 360);
 // frameRate(1);
  imageMode(CENTER); // interpret x and y coordinates as the center of the image
  dx = width / 2;
  dy = height / 2;
}

function draw() {
  
  
  
  image(landscape, width / 2, height / 2);
  textFont("Brush Script MT")
  textSize(100);
  
  
  // animation loop
  // % modulo -- similar to divide, but it gives you the remainder 
  if (frameCount % 33 == 0)
  sx += sw; // only advance the animation every 33 frames
  if (sx >= sw * 4) {
    sx = 0;
  }

  // interactivity

  let d = dist(mouseX, mouseY, dx, dy);
  let hover = d < dw / 2;

  if (hover && mouseIsPressed) {
    // sad mode
    sy = sw; // adjust to the second row = 32 pixels
    image(spritesheet, dx, dy, dw, dh, sx, sy, sw, sh);
  
    image(speech,dx+150,dy-100,200,200);
  
    push();
    translate(dx+90,dy-100);
    rotate(-0.2);
    text("booo",0,0);  
    pop();
    
      image(rain, width / 2, height / 2);
    
    if(rainSound.isPlaying() == false){
       rainSound.play(); //start playback
    
    }
   
    dx = mouseX;
    dy = mouseY;
  }
  //happy mode
  else {
    image(spritesheet, dx, dy, dw, dh, sx, sy, sw, sh);
    sy = 0;
    rainSound.stop(); // stop the playback
  }

  //drawing

  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
}
