function setup ( ){
createCanvas(windowWidth, windowHeight, WEBGL);
 background(120,0,0)
rectMode(CORNER);

}

function draw() {
    fill(255);
    stroke( 0, map(mouseX,0, width,0,255), 180,127);
    strokeWeight(2);
    
    push();
    translate(mouseX -width/2, mouseY-height/2) 
    
    map()
    
    //rotateX(map(mouseX,0,width,0,360));
   // rotateY(map(mouseY,0,height,0,360));
    rotateX(frameCount)
    rotateY(frameCount *10);
console.log(frameCount);//will slow down ur code 

    box(width/4, height/4, 30);
    pop();





}

function windowResized() {
resizeCanvas ( windowWidth, windowHeight);
background( 120, 0, 0);

rect(random(width),random(height), 20,20);

console.log (width,height);
console.log ("window resized!")




}

