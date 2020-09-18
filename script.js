var xspeed = 5;
var yspeed = 10;
var g = 0.5;
var time = 0;

function setup() {
  createCanvas(630, 630);
  b = new Ball();
  frameRate(60);
}

function draw() {
  background(220);
  fill(50);
  rect(0,height/2,width,height/2);
  b.show();
  b.move();
  time = frameCount/60;
}

class Ball{
  constructor(){
    this.r = 30;
    this.x = this.r/2;
    this.y = height/2-this.r/2;
    this.clr = 'red';
    this.goingRight = true;
  }
  
  show(){
    stroke(0);
    strokeWeight(1);
    fill(this.clr);
    ellipse(this.x,this.y,this.r,this.r);
  }
  
  move(){
    if(this.x >= width-15){
      this.goingRight = false;
    }
    else if(this.x <= 15){
      this.goingRight = true;
      print(time);
    }
    
 
    if(this.goingRight){
      this.x += xspeed;
    }
    else{
      this.x -= xspeed;
    }
  } 
}