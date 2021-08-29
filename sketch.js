var sea, ship, seaImg, shipImg1

function preload(){
seaImg = loadImage("sea.png");
//shipImg1 = loadImage("ship-1.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);
  
  sea = createSprite(185,200,5,100)
  sea.addImage(seaImg);
  sea.velocityX = -4;
  sea.scale = 0.3

  ship = createSprite(100,250,100,100);
  ship.addAnimation("moving",shipImg1);
  ship.scale = 0.2
}

function draw() 
{
  background("blue");

  if(sea.x < 0)
  {
    sea.x = sea.width/7;
  }
  
  drawSprites();
}
  