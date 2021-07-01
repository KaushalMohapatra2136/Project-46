var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2, bike3, bike4;
var bike1Img, bike2Img, bike3Img, bike4Img,trackImg;
var bronze,gold,silver;

function preload(){
  bike1Img=loadImage("B1.png");
  bike2Img=loadImage("B2.png");
  bike3Img=loadImage("B3.png");
  bike4Img=loadImage("B4.png");
  trackImg=loadImage("track.jpg");
  bronze=loadImage("bronze.png");
  silver=loadImage("silver.png");
  gold=loadImage("gold.png");



  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  gameState=0;
  distance=0;
  finishedPlayers=0;
  xVel=0;
  yVel=0;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && finishedPlayers===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 && finishedPlayers===2){
    game.displayRanks();
  }

  if(finishedPlayers===4){
    game.update(2);
  }
}
