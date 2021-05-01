
// MAtter.Engine, MAtter.World, MAtter.Bodies

// Namespacing  - nickname

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground,box;

function setup() {
  createCanvas(800,400);
 
  // Create an engine
  engine = Engine.create(); // Matter.Engine.create();
  world = engine.world;

  // JSON format  - Javascript Object Notation.

  var ground_options = {
    isStatic : true
  };

  ground = Bodies.rectangle(400,390,800,10,ground_options);
  World.add(world,ground);  
  var box_options = {
    restitution : 2.0
  };
  box = Bodies.rectangle(150,100,50,100,box_options);
  World.add(world,box)
  console.log(ground); 

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER) ;
  rect(ground.position.x,ground.position.y,800,10);
  rect(box.position.x,box.position.y,50,100);
}