class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    
  
      bike1 = createSprite(100,200);  
      bike1.addImage(bike1Img);  
      bike1.scale=0.3;
      bike2 = createSprite(300,200);
      bike2.addImage(bike2Img);  
      bike2.scale=0.5;
      bike3 = createSprite(500,200);
      bike3.addImage(bike3Img);  
      bike3.scale=0.5;
      bike4 = createSprite(700,200);
      bike4.addImage(bike4Img);  
      bike4.scale=1;
      bikes = [bike1, bike2, bike3, bike4];

      passedFinished=false;
    }
  
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      player.getFinishedPlayers();
      if(allPlayers !==undefined){
        background(rgb(198,135,103));
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
      }
    
        var index=0;
        var x=175;
        var y;

        for(var plr in allPlayers){
          index=index+1;
          x=x+200;
          y=displayHeight-allPlayers[plr].distance;
          bikes[index-1].x=x;
          bikes[index-1].y=y;
        
      text(allPlayers[plr].name,bikes[index-1].x,bikes[index-1].y+25);

        if (index === player.index){
          fill('red')
          ellipse(x,y,100,100);
          bikes[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = bikes[index-1].y;
        }
      }
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
        
      
          if(player.distance > 3860){
            gameState = 2;
          }
        
         
          drawSprites();
    }
      
       displayRanks(){
        camera.position.x = 0;
        camera.position.y = 0;
        Player.getPlayerInfo();
        image(bronze,displayWidth/-4,-100+displayHeight/9,200,240);
        image(silver,displayWidth/-4,-100+displayHeight/10,225,270);
        image(gold,0,-100,250,300);

        for(var plr in allPlayers){
          if(allPlayers[plr].place===1){
            text("First:"+allPlayers[plr].name,0,85)
          }
          else if(allPlayers[plr].place===2){
            text("Second:"+allPlayers[plr].name,displayWidth/4,displayHeight/9+73)
          }
          else if(allPlayers[plr].place===3){
            text("Third:"+allPlayers[plr].name,displayWidth/4,displayHeight/10+76)
          }
          else {
            text("Honorable Mention:"+allPlayers[plr].name,0,225)
          }
          
          
        }
       }
        }
      


          

    