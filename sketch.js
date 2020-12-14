var hour, min, sec;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);
  translate(200, 200);
  rotate(-90);
  background(255,255,255);
  hourAngle = map(hour%12, 0, 12, 0, 360);  
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);
  
  push();
    rotate(secAngle);
    stroke("red");
    strokeWeight(7);
    line(0,0,100,0);
  pop();

  push();
    rotate(minAngle);
    stroke("green");
    strokeWeight(7);
    line(0,0,75,0);
  pop();

  push();
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,50,0);
  pop();

  stroke(0, 255,255);
  point(0,0);
  strokeWeight(5);
  noFill();
  stroke(255, 0, 0);
  arc(0, 0 ,300, 300, 0, secAngle);

  stroke(0, 255, 0);
  arc(0, 0 ,280, 280, 0, minAngle);

  stroke(0, 0, 255);
  arc(0, 0 ,260, 260, 0, hrAngle);


  drawSprites();
}