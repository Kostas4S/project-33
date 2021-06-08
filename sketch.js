var boy;
var girl;
var img;

function preload() {
   img = loadImage("images/snow1.jpg");
   boy = loadImage("images/boy.jpg");
   girl = loadImage("images/girl.jpg")

   
   
}

function setup() {
  createCanvas(800,400);
 
  var boy=createSprite(200,120,50,50);
  var girl=createSprite(200,200,50,50);
}
boy.position.x=5;
girl.position.x=10;

boy.friction=5;


function draw() {
  background(255,255,255);  
  image(img,0,0,400,200);
  
  
  drawSprites();
}