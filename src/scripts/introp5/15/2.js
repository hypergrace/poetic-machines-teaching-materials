let x = 200;
let y = 200;
let speed = 1;

function setup(){
    createCanvas(400,400);
    //saveGif("mySketch.gif", 3); // uncomment this line to save a gif of your sketch. The first argument is the name of the file, the second is the length of the recording in seconds.
}


function draw(){
    background(220);
    fill(255,0,0);
    rect(x,y,50,50);
    x+=speed;
}