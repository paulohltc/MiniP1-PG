let r1=100;
let r2=25;
var time=0,cycle_time=60*4;
function setup() {
  createCanvas(600, 600, WEBGL);
  frameRate(60);
}
function draw(){
  background(50,50,75);
  orbitControl(); 
  //normalMaterial();
  rotateX(-1.56);
  rotateZ(-1.2);
  rotateY(-0.5);
  translate(-160, 0, 160);
  
  strokeWeight(2);
  stroke('red'); line(0,0,0,350,0,0);
  stroke('green'); line(0,0,0,0,350,0);
  stroke('blue'); line(0,0,0,0,0,-350);

  push();
    fill(205,205,180);
    stroke(10);
    rotateX(-PI/3);

    rect(0,0,r1*2);
    translate(r1,r1,0);
    ellipse(0,0,r1*2,r1*2);
    strokeWeight(6);
    point(0,0);
    strokeWeight(2);
    push();
      let angle = map(time,0,cycle_time-1,0,TWO_PI);
      rotateX(PI/2);
      rotateY(-PI);
      rotateY(angle);
      translate(0,-r2,r1);

      fill(100,100,90);
      ellipse(0,0,r2*2,r2*2);
      strokeWeight(8);
      stroke(255,32,0);
      point(0-r2*cos((r1/r2)*angle),0-r2*sin((r1/r2)*angle));
    pop();
 
  pop();
  time=(time+1)%cycle_time;
}