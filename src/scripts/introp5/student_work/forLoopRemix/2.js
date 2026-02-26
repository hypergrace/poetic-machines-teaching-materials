// art 151 s26 D.M.

//define our variables
//control panel
//variable declaration
//var, let, const

//single equal sign is always used for declaration of variables

//camelCaseStyle---this is not a syntactical rule
let vOffset = 80; //the number of pixels between the top and bottom ofcanvas and the start and end of line
let xSpacing = 5; //the horizontal spacing between lines {to do}
let numLines = 50; //number of lines {to do}


function setup() {
  createCanvas(200, 500);
  noLoop();
}

function draw() {
  background("rgb(218,218,236)");
  
  let index = 0; //starting condition
  
  //40:40 min for index repetition
  
  //local scoped; only usable in the context of draw loop
  //code inside () are rules and conditions
  //code inside {}is the code to be repeated in the for loop
  //start, stop, change
  
  //book style:in terms of visual result 
  //index style: in terms of the number of repetitions
  //start
  

  
  for(let i=0;i<70;i++) {
     stroke("rgb(153,153,192)")
  line(20 + xSpacing * index, vOffset, 60 + xSpacing * index/4, height - vOffset);
  index++;
  }
  //index = index +1 same as index++
  
  //index++ what is the index of the line that is about to be drawn?

for (var i = 50; i < 200; i += 20) {
  stroke("rgb(243,20,20)")
  strokeWeight(2)
line(i, 30, i + i/2, 80);
line(i + i/2, 80, i*1.2, 120);
}
  
  for(let i=0;i<70;i++){
    stroke("red")
    line(i, 10, 60, height-vOffset)
  
  console.log(mouseX,mouseY)
  }
  
       for (let i=5; i<500; i+=30) {
    
    circle(i,410,i/2)
    i++
  }
  
  for (let i=34; i<400; i+=40) {
    
     line (vOffset+index, height+i, 40, index+i)
  }
  
  
}
