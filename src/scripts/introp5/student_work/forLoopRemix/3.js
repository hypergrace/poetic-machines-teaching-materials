// art 151 s26 D.S.


function setup() {
createCanvas(500,500);
}
function draw() {
background('rgb(0,200,200)');
strokeWeight(1)
for (var i = 0; i < 800; i += 1) {
stroke(0+i,200-i,200,)
line(i+200, 500, i/2, i++);
line(i+350, 500, i/2, i++);
line(i+550, 500, i/2, i++);
line(i+750, 500, i/2, i++);
} 
}
