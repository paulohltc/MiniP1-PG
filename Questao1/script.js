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
    this.goingDown = false;
    this.vx=5;
    
    this.y0 = height/2-this.d/2;
    this.vy0 = -10;
    this.cnt=0;
  }
  
  show(){
    stroke(0);
    strokeWeight(1);
    fill(this.clr);
    ellipse(this.x,this.y,this.d,this.d);
  }
  
  move(){
    ///// Checkar Limite horizontal
    if(this.x >= width-this.d/2){
      this.goingRight = false;
    }
    else if(this.x <= this.d/2){
      this.goingRight = true;
      print(time);
    }
    
    // Movimento vertical
    this.cnt++;
    this.y=this.y0 +this.vy0*this.cnt +g*pow(this.cnt,2)/2;
    if(this.y>=this.y0){
      this.y=this.y0;
      this.cnt=0;
     
    }
    // Movimento horizontal
    if(this.goingRight){
      this.x += this.vx;
    }
    else{
      this.x -= this.vx;
    }
  } 
}
