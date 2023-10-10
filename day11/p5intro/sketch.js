function setup() {createCanvas ( innerWidth, innerHeight);
 background (200,100,0)
}

function draw () {

 //background (0,200, 100);
//line ( x1, y1, x2, y2);

let red= map(mouseX, 0, width, 0, 255)
fill(red, 0, 0)
strokeWeight(1)
stroke(mouseX, mouseY, 255)

 rect(mouseX, mouseY, random (10,50), random(10,50));

//text `$[mouseX}. ${mouseY}`, mouseX, mouseY]
}

function windowResized () {
    resizeCanvas(innerWidth,innerHeight)
}