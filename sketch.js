
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
h= new hammer (10,100)
i = new iron (200,200)
p= new plane (600,600,1200,20)
s= new stone (200,200,100,100)
r= new rubber (700,450,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  h.display()
  i.display()
  p.display()
  s.display()
  r.display()
  drawSprites();
 
}



