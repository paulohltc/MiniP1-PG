var time=60*4,cycle_time=60*8;
var axisSize = 40;
var x0=0,y0=0,r=20;
var xlst=-r,ylst=0;


function setup(){
  createCanvas(600,600);
  frameRate(60);
  background(0);
  grid()
}
function draw(){
  // 60 frames por segundo
  // em 60*4 frames angle == PI
  let angle=map(time,0,cycle_time-1,0,TWO_PI);
  let x1=x0+r*cos(angle);
  let y1=y0+r*sin(angle);
  if(time==60*8 -1 || time == 60*4-1){
    x0 = xlst;
    y0 = ylst;
    xlst = x1;
    ylst = y1;

    //print(x0,y0);
    
    r*=2;
  }  

  plot(x1,y1)



  //plot(0,0)
  //plot(-20,0);
  time=(time+1)%cycle_time;
}


function grid(){
  strokeWeight(2);
  stroke(255);
  line(0,height/2,width,height/2);
  line(width/2,0,width/2,height)
  strokeWeight(1);
  for(let i = 0; i <= width; i+= width/axisSize){ // X axis
    line(i,height/2-3,i,height/2+3);
  }
  for(let i = 0; i <= width; i+= width/axisSize){ // Y axis
    line(width/2-3,i,width/2+3,i);
  }
}

function plot(x,y){
  strokeWeight(5)
  stroke(255,0,0)
  px = map(x/10,-axisSize/2,axisSize/2,0,width);
  py = map(y/10,-axisSize/2,axisSize/2,height,0);
  point(px,py);
}
