//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
 
  dogImg = loadImage("Dog.png")
  happydog = loadImage("happydog.png")
	//load images here
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database()
 dog = createSprite(400,350) 
 dog.addImage(dogImg)
dog.scale= 0.3

 database.ref('food').on("value",readStock)
}


function draw() {  
background("green")
if(keyWentDown(UP_ARROW)){
  dog.addImage (happydog)
  writeStock(foodS)

}
  drawSprites();
  //add styles here
textSize(20)
text("press up arrow",500,600)
text("food remaining: "+foodS,100,200)
}
function readStock(data){
  foodS= data.val()

}
function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{x=x-1}
  database.ref('/').update({
    food : x
  })
}



