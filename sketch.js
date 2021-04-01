var PLAY = 1;
var WIN = 2;
var END = 0;
var gameState = PLAY;

var crow,crowImage;

var stone,stoneImage;

var pot,pot1Image,pot2Image,pot3Image,pot4Image,pot5Image;

var bgImage;

var s1,s2,s3,s4;

//  Function Preload
function preload (){
  watreSound = loadSound("sounds/water.mp3");
  bgSound = loadSound("sounds/bgsound.wav");
  gameOverSound = loadSound("sounds/game over.mp3");
  //  Game Over Image
  gameOverImg = loadImage("images/gameOverImage.png");
  // Restart Image
  restartImg = loadImage("images/restartImage.png");
  // Win Image
  winImg = loadImage("images/nnnnn.png");
  // Background Image
  bgImage = loadImage("images/bgimage.jpg")
  // pot Image
  pot1Image = loadImage("images/pot1.png");
  pot2Image = loadImage("images/pot2.png");
  pot3Image = loadImage("images/pot3.png");
  pot4Image = loadImage("images/pot4.png");
  pot5Image = loadImage("images/pot5.png");
  pot6Image = loadImage("images/pot6.png");
  pot7Image = loadImage("images/pot7.png");
  //  Crow Image
  crowImage1 = loadAnimation("images/crow1.png","images/crow2.png","images/crow3.png","images/crow4.png")
  crowCollideImage1 = loadImage("images/crow1.png")
  crowCollideImage2 = loadImage("images/crow7.png")
  crowImage2 = loadAnimation("images/crow5.png","images/crow6.png","images/crow7.png","images/crow8.png")
  //  Stone Image
  stoneImage = loadImage("images/stone.png");
  //  Tartule Image
  tartuleImage = loadAnimation("images/turtle1.png","images/turtle2.png","images/turtle3.png")
  //Bird Image
  birdImage = loadAnimation("images/bird1.png","images/bird2.png","images/bird3.png","images/bird4.png","images/bird5.png");
}
  //  Function Setup
function setup (){
  //  CreateCanvas
  var canvas = createCanvas(1350,600);
  //  Background sound Playing
  bgSound.play();
//  Restart
  restart = createSprite(width/2+70,height/2);
  restart.addImage(restartImg);
  restart.scale=0.3
  restart.visible=false;

  //  Game Over Sprite
  gameOver = createSprite(width/2+70,height/2-130);
  gameOver.addImage(gameOverImg);
  gameOver.visible=false
    //  Win Sprite
  win = createSprite(width/2+70,height/2-130);
  win.addImage(winImg);
  win.scale=2
  win.visible=false
//  Pot varible's
  pot1 = createSprite(150,555,20,20);
  pot1.addImage("gg", pot1Image);
  pot1.scale = 0.5;
  pot2 = createSprite(150,555,20,20);
  pot2.addImage("gg", pot2Image);
  pot2.scale = 0.5;
  pot2.visible = false;
  pot3 = createSprite(150,555,20,20);
  pot3.addImage("gg", pot3Image);
  pot3.scale = 0.5;
  pot3.visible = false;
  pot4 = createSprite(150,555,20,20);
  pot4.addImage("gg", pot4Image);
  pot4.scale = 0.5;
  pot4.visible = false;
  pot5 = createSprite(150,555,20,20);
  pot5.addImage("gg", pot5Image);
  pot5.scale = 0.5;
  pot5.visible = false;
  pot6 = createSprite(150,555,20,20);
  pot6.addImage("gg", pot6Image);
  pot6.scale = 0.5;
  pot6.visible = false;
  pot7 = createSprite(150,555,20,20);
  pot7.addImage("gg", pot7Image);
  pot7.scale = 0.5;
  pot7.visible = false;
// Pot strucher
s1 = createSprite(110,555,5,65);
s2 = createSprite(190,555,5,65);
s3 = createSprite(150,590,80,5);
s4 = createSprite(150,520,80,5);
s5 = createSprite(150,590,65,20);
 s1.visible = false;
 s2.visible = false;
 s3.visible = false;
 s4.visible = false;
 s5.visible = false;
  //  Crow sprits
 crow = createSprite(100,100,100,100)
 crow.addAnimation("fling",crowImage1);
  crow.setCollider("rectangle",0,-5,100,30);
  crow2 = createSprite(100,100,100,100)
  crow2.addAnimation("fling",crowImage2);
   crow2.setCollider("rectangle",-5,0,100,30);
crow2.visible=false;
  //  Boundries
b1 = createSprite(675,-3,1350,2)
b2 = createSprite(1353,300,2,600)
b3 = createSprite(675,600,1350,2)
b4 = createSprite(0,300,2,600)
  //  Score's
  time = 250  
score = 0  
  // Add Group's
stoneGroup = new Group();
turtleGroup = new Group();
birdGroup = new Group();
}
//  Function Draw
function draw (){
  background(bgImage);
  // text
  fill ("skyblue")
  rect(593,0,250,40)
  fill("black");
  textSize(25)
  text("Time: "+ time, 25,20);
  text("Score: ", 1000,25);
  text( score, 1072,27)
  fill("white");
   text("save water - save life",600,25);
// time
   time = time + Math.round(getFrameRate()/-62);
  //  GameState Play
  if(gameState === PLAY){
    // game over sound stopped
    gameOverSoundStop();
    // pot visibiles
    if (score===6){pot2.visible = true;}
    if (score===12){pot3.visible = true;}
    if (score===18){pot4.visible = true;}
    if (score===24){pot5.visible = true;}
    if (score===30){pot6.visible = true;}
    if (score===36){pot7.visible = true;
      gameState = WIN;
    }
  // incrize score
    for (var i = 0; i < stoneGroup.length; i++) { 
      if(stoneGroup.get(i).isTouching(crow)){
        stoneGroup.get(i).remove()
      score = score+2;
      watreSound.play(true);

    }
  }
  //  crow moving
  if(keyIsDown(UP_ARROW)){
    crow.y = crow.y - 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    crow.y = crow.y + 10;
  }
  if(keyDown("right_arrow")){
    crow.x = crow.x + 10;
    crow2.visible=false
  }  
   if(keyDown("left_arrow")){
    crow.x = crow.x - 10;
    crow.visible=false;
  } 
  if(keyIsDown(UP_ARROW)){
    crow2.y = crow2.y - 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    crow2.y = crow2.y + 10;
  }
  if(keyDown("right_arrow")){
    crow2.x = crow2.x + 10;
    crow.visible=true;
    }  
   if(keyDown("left_arrow")){
    crow2.x = crow2.x - 10;
    crow2.visible=true;
  } 
  // call function's
  Bird();
  Stone();
  turtyle1();
  bgsoundPlaying();

if (turtleGroup.isTouching(crow)){
  gameState = END;
  gameOverSoundPlaying();
}
if (birdGroup.isTouching(crow)){
  gameState = END;
  gameOverSoundPlaying();
}
  if (time===0){
    gameState = END;
  }
}
  //  Gamestate End
  else if (gameState === END) {
   gameOver.visible=true;
   bgsoundStopped();
    fill("red");
    text("Time: "+ time, 25,20);

    time = 0;
     stoneGroup.setLifetimeEach(-1);
     stoneGroup.setVelocityXEach(0);

     turtleGroup.setLifetimeEach(-1);
     turtleGroup.setVelocityXEach(0);  

     birdGroup.setLifetimeEach(-1);
     birdGroup.setVelocityXEach(0);   

     restart.visible=true
  }

  
  else if (gameState === WIN) {
    dddd();

     stoneGroup.setLifetimeEach(-1);
     stoneGroup.setVelocityXEach(0);

     turtleGroup.setLifetimeEach(-1);
     turtleGroup.setVelocityXEach(0);   

      birdGroup.setLifetimeEach(-1);
      birdGroup.setVelocityXEach(0);  

win.visible=true;
     restart.visible=true
  }


  crow.collide(s1);
  crow.collide(s2);
  crow.collide(s3);
  crow2.collide(s1);
  crow2.collide(s2);
  crow2.collide(s3);

  crow.collide(b1);
  crow.collide(b2);
  crow.collide(b3);
  crow.collide(b4);
  crow2.collide(b1);
  crow2.collide(b2);
  crow2.collide(b3);
  crow2.collide(b4);
  if(mousePressedOver(restart)) {
    reset();
    bgsoundPlaying();
  }
drawSprites();
}

function reset(){
  gameState=PLAY;
crow.x=100;
crow.y=100;
crow2.x=100;
crow2.y=100;

gameOver.visible=false;
  restart.visible=false
  crow.visible=true;
  crow2.visible=true;

  pot1.visible=true;
  pot2.visible=false;
  pot3.visible=false;
  pot4.visible=false;
  pot5.visible=false;
  pot6.visible=false;
  pot7.visible=false;
  win.visible=false

  turtleGroup.visible=true;;
stoneGroup.visible=true;
  
  stoneGroup.destroyEach();
  turtleGroup.destroyEach();
  birdGroup.destroyEach();
  time=250;
  score=0;
}


function Stone(){
  if (frameCount % 40 === 0){
   var stone = createSprite(1400,580,40,10);
   stone.y = Math.round(random(470,555));
   stone.addImage(stoneImage);
   stone.scale=0.04;
   stone.velocityX = -5; 
   stone.lifetime = 1350;
   stone.setCollider("circle",0,0,100);
   stoneGroup.add(stone);

 }}

 function turtyle1(){
   if (frameCount % 70 === 0){
   var turtle = createSprite(1400,height/2,40,10);
   turtle.y = Math.round(random(470,555));
   turtle.addAnimation("sss",tartuleImage);
   turtle.velocityX = -5; 
   turtle.lifetime = 1350;
   turtle.setCollider("circle",0,0,20);
  turtle.scale=0.5
  turtleGroup.add(turtle);
 }}
 function Bird(){
  if (frameCount % 150 === 0){
   var bird = createSprite(1400,height/2+200,40,10);
   bird.y = Math.round(random(0,300));
   bird.addAnimation("sss",birdImage);
   bird.velocityX = -6; 
   bird.lifetime = 1350;
   bird.setCollider("circle",0,0,15);
  // bird.debug=true;
   bird.scale=1.5;
  birdGroup.add(bird);
 }}

function bgsoundPlaying(){  if (frameCount % 380 === 0){ bgSound.play();}}
function bgsoundStopped(){bgSound.stop();}
function gameOverSoundPlaying(){gameOverSound.play(true);}
function gameOverSoundStop(){gameOverSound.stop();  }