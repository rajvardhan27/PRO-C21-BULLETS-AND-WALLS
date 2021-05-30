var wall,thickness;
var bullet, speed , weigth;






function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)
  speed = random (223,321);
  weigth = random(30,52)

  bullet = createSprite(50, 200, 50, 50);
  bullet. velocityX = speed;
  (bullet).shapeColor=color("white")

wall = createSprite(1200,200,thickness,height/2);
(wall).shapeColor=color("white")
}

function draw() {
  background(0);  

  if (wall.x-bullet.x < (bullet.width+ wall.width)/2)
  
{
  bullet.velocityX = 0; 
var damage = 0.5 * weigth * speed * speed/22509;
if (damage >180)
{
  bullet.shapeColor = color(225,0,0); 
}

if (damage<180 && damage> 100)
{
  bullet.shapeColor = color(230,230,0); 
}

if (damage <100)
{
  bullet.shapeColor = color(0,255,0); 
}
}
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge = lbullet.x + lbullet.width;

wallLeftEdge = lwall.x;
if(bulletRightEdge >= wallLeftEdge)
{
  return true;
}

return false;



}









