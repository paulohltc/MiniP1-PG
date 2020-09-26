var r1 = 100,r2=25;
var x2,y2;
var x3,y3;
var time=0,cycle_time=60*4;
function setup(){
  createCanvas(500,500);
  frameRate(60);
  x2 = width/2+(r1-r2);
  y2 = height/2;
  x3 = width/2+r1;  
  y3 = height/2;
}
function draw(){
  background(50,50,75);
  strokeWeight(2);
  stroke(255);
  let angle = map(time,0,cycle_time-1,0,TWO_PI);
  fill(0,0,0,100);
  ellipse(width/2,height/2,r1*2,r1*2);
  noFill();
  ellipse(x2,y2,r2*2,r2*2);
  stroke(255,0,0);
  strokeWeight(4);
  point(x3,y3);

  x2=width/2 + (r1-r2)*cos(angle);
  y2=height/2 - (r1-r2)*sin(angle);

  x3=x2+r2*cos((r1/r2)*angle);
  y3=y2+r2*sin((r1/r2)*angle);
  
  time = (time+1) % cycle_time;
  //oiiiiii
}