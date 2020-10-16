var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,50,50);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() {
  background(255,255,255);  
  if(fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 || fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 ) {
    movingrect.shapeColor ="red" 
    fixedrect.shapeColor ="red"
  } else
  { movingrect.shapeColor="green"; 
    fixedrect.shapeColor="green"; 
  }
  
  movingrect.y=mouseY;
  movingrect.x=mouseX;
  
  drawSprites();
}