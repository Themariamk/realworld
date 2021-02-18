const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; //Matter.Bodies.rectangle

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var ballb={restitution:1.0}
  

  ball=Bodies.circle(200,100,50,ballb);
  World.add(world,ball);
  


  var ground_properties={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,200,20,ground_properties);
  World.add(world,ground);

 
 
}

function draw() {
  background(0);
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20) ;
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,50,50)
  
}