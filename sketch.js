var bg;
var clue, paper, treasurebox, opentreasurebox;
var clueImg, paperImg, treasureBoxImg, opTreasureBoxImg;
var leaf, paperball;
var leafImg, paperballImg;

function preload() {
  clueImg = loadImage("images/cluepaper.png");
  paperImg = loadImage("images/normalpaper.png");
  treasureBoxImg = loadImage("images/treasurebox.png");
  opTreasureBoxImg = loadImage("images/opentreasurebox.png");
  leafImg = loadImage("images/leaf.png");
  paperballImg = loadImage("images/paperball.png");
  bg = loadImage("images/bg.gif");
}


function setup() {
  createCanvas(800,400);
 // background = createSprite(400, 200, 50, 50);
  //background.addAnimation("background", bg);
  clue = createSprite(250, 55, 20, 20);
  clue.addImage(clueImg);
  clue.scale=0.2;
  paper = createSprite(105, 70, 40, 20);
  paper.addImage(paperImg);
  paper.scale=0.3;
  treasurebox = createSprite(390, 340, 100, 40);
  treasurebox.addImage(treasureBoxImg);
  treasurebox.scale=0.6;
  leaf = createSprite(300, 25, 20, 20);
  leaf.addImage(leafImg);
  leaf.scale=0.4;
  paperball = createSprite(50, 120, 20, 20);
  paperball.addImage(paperballImg);
  paperball.scale=0.35;
}

function draw() {
  background(bg); 
  treasurebox.x = World.mouseX; 
  edges= createEdgeSprites();
  treasurebox.collide(edges);
  drawSprites();
}

var select_sprites = Math.round(random(1,3));
if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createClues();
  } else if (select_sprites == 2) {
    createPapers();
  }else {
    createPaperballs();
  }
}

function createClues() {
  clue = createSprite(random(50, 350),40, 10, 10);
  clue.addImage(clueImg);
  clue.scale=0.07;
  clue.velocityY = 3;
  clue.lifetime = 150;
    
  }
  
  function createPapers() {
  paper = createSprite(random(50, 350),40, 10, 10);
  paper.addImage(paperImg);
  paper.scale=0.08;
  paper.velocityY = 3;
  paper.lifetime = 150;
  }
  
  function createPaperballs() {
  paperball = createSprite(random(50, 350),40, 10, 10);
  paperball.addImage(paperballImg);
  paperball.scale=0.06;
    paperball.velocityY = 3;
    paperball.lifetime = 150;
  }