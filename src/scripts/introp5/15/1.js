function setup(){
    createCanvas(400,400);
    noLoop();
}

function draw(){
    background(220);
    fill(255,0,0);
    rect(100,100,200,200);
    // save(); // unccomment this line to save an image of the canvas every time you run the sketch
}


function mousePressed(){
 //   save(); // OR! this will save an image of the canvas every time you click on the canvas. Useful if you have an animation and you want to save a specific frame.
}