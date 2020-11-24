const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;  
  ground=new Ground(240,780,400,20)
}

function draw() {
  background(255,255,255);
  drawSprites();
  ground.display();
}