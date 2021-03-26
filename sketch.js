var song;

function preload()
{
	//song = loadSound("clockSound.mp3");
}

function setup() {
  

	createCanvas(800, 700);

  angleMode(DEGREES);
	
  
}


function draw() {
  background(0);
  //song.loop();
  

  translate(300,300);
  rotate(-90);

  let m = minute();
 
  let s = second();
 
  let h = hour();
 
  fill("red");
  //when we divide hour by 12 so we will get the current hour as 4 not as 16.
  text("Current Time: " + h % 12 + " : " +  m + " : " + s, 400, 400);
  
  let secAngle = map(s,0,60,0,360);

  push();
  strokeWeight(3);
  stroke("yellow");
  rotate(secAngle);
  line(0,0,100,0);
  pop();
  
  strokeWeight(10);
  noFill();
  stroke("yellow");
  //first is the x position, second is the y position third point is width and fourth point is height
  //fifth is starting point(angle to start) sixth is stop point(angle to stop)
  arc(0,30,300,300,0,secAngle);

  let minAngle = map(m,0,60,0,360);

  push();
  strokeWeight(3);
  stroke("green");
  rotate(minAngle);
  line(0,0,100,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke("green");
  arc(0,30,350,350,0,minAngle);

  let hrAngle = map(h,0,12,0,360);

  push();
  strokeWeight(3);
  stroke("red");
  rotate(hrAngle);
  line(0,0,100,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,30,400,400,0,hrAngle);
  
  drawSprites();
 
}



