const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball,ballImg;
var slingShot;
var polygon_img;


function preload(){
  ballImg = loadImage("polygon.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground(450,350,900,20);
  stand1 = new Ground(380,300,270,10);
  stand2 = new Ground(700,200,200,10);
 
  //group 1
  //bottom
  block1 = new Block(380,275,30,40);  
  block2 = new Block(410,275,30,40);
  block3 = new Block(440,275,30,40);
  
  //middle
  block4 = new Block(395,235,30,40);
  block5 = new Block(425,235,30,40);

  //top
  block6 = new Block(410,195,30,40);

  

  //set two 
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  
  //level two
  blocks3 = new Block(655,135,30,40);
  
  
  //ball  with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
 // background(backgroundImg);  
 background("black")
  Engine.update(engine);
 
  
 // ground.display();
  strokeWeight(2);
  stroke("white");
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke("cyan");
  fill("hotpink")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  

  strokeWeight(2)
  stroke("hotpink");
  fill("cyan");
  blocks1.display();
  blocks2.display();
  blocks3.display();


  strokeWeight(1);
  stroke("white");
  fill("white");
  text("Knock the blocks down because I say so",500,250);
  slingShot.display();

  strokeWeight(0.5);
  stroke("maroon");
  fill("red");
  ellipse(ball.position.x,ball.position.y,20);
  //ball.addImage(ballImg);
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}