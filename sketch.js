const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var right_arrow , left_arrow

var ball 
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
right_arrow=createImg("right.png");
right_arrow.position(220,30);
right_arrow.size(50,50);
right_arrow.mouseClicked(hForce);

left_arrow=createImg("up.png");
left_arrow.position(20,30);
left_arrow.size(50,50);
left_arrow.mouseClicked(vForce);

var options={
  restitution:0.05
}

ball = Bodies.circle(200,100,20,options)
World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
}

function hForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
  }