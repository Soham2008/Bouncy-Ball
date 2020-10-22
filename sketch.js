//namespacing
const Engine = Matter.Engine; //Universe
const World = Matter.World; //Earth
const Bodies = Matter.Bodies; //Humans, Trees, Balls

var myEngine, myWorld; 

var ball ; 

var ground ;

function setup() {
  var canvas = createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;


  var option1 = {
    isStatic: true
  }

  var option2 = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,20,option2);
  World.add(myWorld,ball);

  ground = Bodies.rectangle(200,390,200,20,option1);
  World.add(myWorld,ground);

  console.log(ground);

}

function draw() {
  Engine.update(myEngine);
  background("lightblue");  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);

}