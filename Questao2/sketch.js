
function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

//x=x0+r·cos(t), y=y0+r·sen(t)
function draw() {
  background(10);
  stroke(250);
  noFill();
  
  // 60 frames por segundo
  // em 120 frames angle == PI/4
  let angle=map(min(120,frameCount),1,120,0,PI/4);
  
  let r1=30,r2=45;
  let x0=width/2,y0=2*height/5;
  
  let x1=map(sin(angle),-1,1,x0-r1,x0+r1);
  let y1=map(cos(angle),-1,1,y0-r1,y0+r1);
  
  let x2=map(sin(2*angle),-1,1,x1-r2,x1+r2);
  let y2=map(cos(2*angle),-1,1,y1-r2,y1+r2);
  
  strokeWeight(4)
  point(x0,y0);
  point(x1,y1);
  point(x2,y2);
  strokeWeight(1);
  
  beginShape(LINES);
    vertex(x0,y0);
    vertex(x1,y1);
    vertex(x1,y1);
    vertex(x2,y2);
  endShape();
}