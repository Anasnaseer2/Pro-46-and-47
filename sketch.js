var snake
var dotgroup
var count=0
var edges
var immortalpowerup=0
var powerupgroup
var score=0
var direction="h"
var snakewidth
var snakeheight
function setup(){
  createCanvas(windowWidth,windowHeight)
  snake=createSprite(50,50,10,10)
  snakewidth=snake.width
  snakeheight=snake.height


  edges=createEdgeSprites()
  dotgroup= new Group ()

  powerupgroup= new Group()
}
function draw(){
  background("black")
  move();
  if(snake.isTouching(edges)){
    
    
    if(immortalpowerup===1){
      
      if(frameCount>=count+60){
        immortalpowerup=0
        count=0

      }
      snake.collide(edges)

    }
    else{
    snake.velocityX=0
    snake.velocityY=0
    dotgroup.destroyEach()
    text("You lose",windowWidth/2,windowHeight/2)

  }}
  changedirection();

  immortality();

  for(var i=0;i<powerupgroup.length;i++){
    if(snake.isTouching(powerupgroup[i])){
      powerupgroup[i].destroy()
      immortalpowerup=1
      count=frameCount

    }
  }





  
    for(var i=0;i<dotgroup.length;i++){
      if(snake.isTouching(dotgroup[i])){
        dotgroup[i].destroy()
        snakewidth=snakewidth+10
        score+=1
      }
    }
  if (snakeheight===windowHeight||snakewidth===windowWidth){
    text("You won",windowWidthw/2,windowHeight/2)
  }
  text("Score:"+score,windowWidth-50,25)

  
  if(dotgroup.length<10)
  {createdots();}
  drawSprites();
}

function move(){
  if(keyDown(DOWN_ARROW)){
    direction="v"
    
    snake.velocityY=2
    snake.velocityX=0


  }

  if(keyDown(UP_ARROW)){
    direction="v"
    snake.velocityY=-2
    snake.velocityX=0

  }

  if(keyDown(LEFT_ARROW)){
    direction="h"
    snake.velocityX=-2
    snake.velocityY=0
  }

  if(keyDown(RIGHT_ARROW)){
    direction="h"
    snake.velocityX=2
    snake.velocityY=0

  }
}

function createdots(){
  if(frameCount%50===0){
    var dot=createSprite(random(20,windowWidth-20),random(20,windowHeight-20),10,10)
    dotgroup.add(dot)
  }
}
function changedirection(){
  if(direction==="h"){
    snake.width=snakewidth
    snake.height=snakeheight

  }
  else{snake.width=snakeheight
  snake.height=snakewidth}
}

function immortality(){
  if(frameCount%200===0){
    var immortality=createSprite(random(20,windowWidth-20),random(20,windowHeight-20),30,30)
    powerupgroup.add(immortality)
  }
}


