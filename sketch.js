const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,480);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 400, 300, 10);
  division1 = new Divisions(700,350,10,300);

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  ground.display();

  division1.display();
  drawSprites();
}