var Ball;

function setup() {
  createCanvas(400,400);
  Ball = createSprite(200,200,20,20);
}

function draw(){
if (keyIsDown(DOWN_ARROW)){
  Ball.y = Ball.y+5;
}
if (keyIsDown(UP_ARROW)){
  Ball.y = Ball.y-5;
}
if (keyIsDown(LEFT_ARROW)){
  Ball.x = Ball.x-5;
}
if (keyIsDown(RIGHT_ARROW)){
  Ball.x = Ball.x+5;
}
  background("yellow");
drawSprites();
}




