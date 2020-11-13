
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper1;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	paperObject = new PaperBall(60,620,40);
	ground = new Ground(400,680,800,20);
	ground1 = new Ground(740,620,10,58)
	ground2 = new Ground(660,650,10,0)
	Dustbin1 = new Dustbin(650,570,100,100)

		Engine.run(engine);
  
}

function draw() {
  background(255);
  
  ground.display();
  ground1.display();
  ground2.display();
  Dustbin1.display();
  paperObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-400})
	}
}