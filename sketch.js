var Sarah, sarahPng, jumpPng, runPng;
var bg, note, note1bg, note2, note3;
var nextButtonImg, hole, nextButton;
var system, security;
var count = 0;
var gameState = "START";


function preload() {
  
  sarahPng = loadImage("Images/girl1-stand.png");
  bg = loadImage("Images/background.jpeg")
  note1bg = loadImage("Images/note1.png")
  nextButtonImg = loadImage("Images/next-button.png")
  note2 = loadImage("Images/note2.png")
  note3 = loadImage("Images/note3.png")
  buttonImg2 = loadImage("Images/next-button.png")

}

function setup() {
  createCanvas(displayWidth,680);

  Sarah = createSprite(140, 450, 50, 50);
  Sarah.addImage(sarahPng)
  Sarah.scale = 3;

  note = createSprite(width/2, 340, 300, 300)
  note.addImage(note1bg)
  note.scale = 0.25

  nextButton = createSprite(880,570,10,10)
  nextButton.addImage(nextButtonImg)
  nextButton.scale = 0.5

  system = new System()
  security = new Security() 
  //security.forInvisibility()

}

function draw() {
  background(bg);

  stroke("white")
  textSize(20)
  text(mouseX +","+mouseY, 100, 100)
  
  if(mousePressedOver(nextButton))
  {
    console.log("next button is pressed");
    console.log(count);
    count = count+1
    note.addImage(note2)
    security.display();
  }

 

 // if(note.image = note3 && mousePressedOver(note))
  
   // note.destroy()
  
  

  drawSprites();
}