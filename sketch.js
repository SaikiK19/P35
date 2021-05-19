//Create variables here
var dog,dogImage,happyDog;
var database;
var foodS,foodStock;
var food;
var feed,addFood;
var fedTime,lastFed;

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  feed = createButton("Feed the Dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
	//load images here
}

function setup() {
	createCanvas(1000, 700);
  dog = createSprite(800,350,50,50);
  database = firebase.database();
  dogImage.height = 200
  dogImage.width = 200
  happyDog.height = 200
  happyDog.width = 200
  dog.addImage(dogImage);
  food = new Food()
}


function draw() { 
  background(46,139,87);
  
  
  food.display();
  drawSprites();
  //add styles here
  textSize(30);
  fill("white")
  text("Food remaining: "+foodS,25,600)
  text("Press the Up arrow to feed the dog",10,25);


}


function feedDog(){
  dog.addImage(happyDog)
  
  if(food.getFoodStock()<=0){
    food.updateFoodStock(food.getFoodStock()*0)
  }
  else{
    food.updateFoodStock(food.getFoodStock()-1)
  }
  database.ref('/').update({
    Food:food.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}