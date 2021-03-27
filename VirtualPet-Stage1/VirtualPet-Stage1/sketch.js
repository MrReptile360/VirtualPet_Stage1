var dog,happyDog,database,foodS,foodStock;

function preload()
{
	dogImg=loadImage("images/dogImg.png");
  happydogImg=loadImage("images/dogImg1.png");
}

function setup() {
createCanvas(displayWidth,displayHeight);

  database=firebase.database();
  
dog=createSprite(250,250,150,150);
dog.addImage("dog",dogImg);
dog.scale=0.2

foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() {  

background(46,139,87);

if (keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog.addImage(happydogImg);
}

  drawSprites();
  

  textSize(30);
  fill("red");
  stroke("black");
  text("Food remaining: " +foodS,300,300);
  text("Note: Press the UP ARROW key to feed the dog milk.",250,50);



}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
  x=0;
  }else{
  x=x-1;
  }

  database.ref('/').update({
  Food:x
  })
}

function readStock(data) {
  foodS=data.val();
  }