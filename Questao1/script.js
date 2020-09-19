var xspeed = 5;
var yspeed = 10;
var g = 0.5;
var time = 0;

function setup() {
  createCanvas(660, 660);
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
    this.d = 60;
    this.x = this.d/2;
    this.y = height/2-this.d/2;
    this.clr = 'red';
    this.goingRight = true;
    this.goingDown = true;
    this.cnt=1;
  }
  
  show(){
    stroke(0);
    strokeWeight(1);
    fill(this.clr);
    ellipse(this.x,this.y,this.d,this.d);
  }
  
  move(){
    ///// Checkar Limite horizontal
    if(this.x >= width-30){
      this.goingRight = false;
    }
    else if(this.x <= 30){
      this.goingRight = true;
      print(time);
    }
    //////

    ///// Fisica gravitacional
    if(this.y + this.d/2 >=height/2){
      this.goingDown = false;
    }
  
    if(yspeed == 0){
      this.goingDown = true;
    }
    /////
    ///// Movimento vertical
    if(this.goingDown){
      this.y+=yspeed;
      yspeed+=g;
    }else{
      yspeed -= g;
      this.y-=yspeed;
    }
    //
    
    ///// Movimento horizontal
    if(this.goingRight){
      this.x += xspeed;
    }
    else{
      this.x -= xspeed;
    }
    /////
  } 
}