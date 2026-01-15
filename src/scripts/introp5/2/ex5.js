// setup is one process
function setup() {
  // The line below creates a canvas which is a square and the numbers have somethign to do with it's size
  createCanvas(500, 300); // createCanvas is to create an Canvas! the first number is width, the second is height; more than one number needs to indicated by separating with a comma
  

}


// and draw is another
function draw() {
  
 
  
  // the call of a function
  // ways of encoding color in p5: 
  // one number 0-255 will be greyscale
  // RGB color - red, green, and blue. the range is 0-255
  // #hex color: ex. "#867065" - be sure to use quotation marks
  background("#948882"); // the number changes the color, 0 or less is black; 220 is light grey; 255 is the max which white
  
  // system varibles: width and height
  // there are two ways to affect a shape's color: fill(), stroke()
 // order to draw a shape w. color is as follows:
  // fill() and/or stroke() THEN
  // shape function: ellipse, circle, square, beginShape
  
  
  //TORSO
  // chest
  fill("green")
  noStroke();
  quad(151,193,328,191,290,317,191,320);//x1,y1,x2,y,x3,y3,x4,y4
  
  // neck
  fill("pink");
  arc(250,192,50,50,0,3.14);
  
  // HEAD
  // Face
  noStroke();
  fill("rgb(240,204,210)");
  ellipse(width/2,150,70,height/3); // (x, y, w, h)

  
  //left eye
  fill("rgb(228,220,220)");
  ellipse(235,134,30,15);
   // left retina 
    fill("rgb(133,26,26)");
    circle(235,134,10); // x,y,w
  // nose 
  stroke("rgb(213,133,146)");
  strokeCap(ROUND);
  strokeWeight(3)
  line(251,134,257,153);
  line(257,153,250,156);
   console.log(mouseX,mouseY);
  
  
  square(0,0,50); // x,y,50 -- x and y are the top left corner! 
  circle(0,0,50); // x and y is the center! of the circle
  
  rect(40,40,20,30);// x,y,w,h
  
  
  
}
