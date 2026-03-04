let sprite;
let bg;

let xOffset = 40;
let yOffset = 100;

let xAnimOffset = 360; // the number of pixels we need to offset IF we are progressing through our sprite sheet!

let animState = 2;

let a = 0;

function preload() {
  sprite = loadImage("/assets/p5img/sprite.png");
  bg = loadImage("/assets/p5img/img3.jpeg");
}

function setup() {
  createCanvas(400, 300);
  //frameRate(10); // takes number and converts to frames per second
  bg.resize(400, 0);
  //uncomment the save gif in order to save the gif to your computer!
 // saveGif("cat.gif",3);
}

function draw() {
  image(bg, 0, 0);
  image(
    sprite,
    0,
    0,
    sprite.width * 1.1,
    sprite.height,
    xOffset + xAnimOffset * animState,
    yOffset
  );
 console.log(frameCount);
  if (frameCount % 10 == 0) {
    animState++;

    if (animState > 2) {
      animState = 0;
    }
  }

  translate(20, 20);
  rotate(a);
  square(-10, -10, 20);
  a += 0.1;
}
