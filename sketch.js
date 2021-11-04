
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball , ground , ground2 , ground3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options ={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	ball = Bodies.circle(80,100,20,ball_options)
	World.add(world , ball)

	ground = new Ground(700,670,1600,20)
	ground2 = new Ground(1400,610,20,100)
	ground3 = new Ground(1200,610,20,100)

	
	
	Engine.run(engine);

	 
}

function draw() 
{
  rectMode(CENTER);
  background(0);

  //Engine.update(engine);
  ellipse(ball.position.x,ball.position.y, 20)


  ground.show();
  ground2.show();
  ground3.show();
  



}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball ,ball.position, {x : 95 , y : -95})
	}

}


