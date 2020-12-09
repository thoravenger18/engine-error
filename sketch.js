const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ball1;
var rope1;
var box1,box2,box3,box4,box5;
var box6,box7,box8;
var box9;

function setup()
{
createCanvas(1000,500);
engine = Engine.create();
world = engine.world;

ball1 = new Ball(200,200,80,80);
rope1 = new Rope(ball1.body, { x: 200, y: 50 });

// ground layer

box1 = new Box(330,235,30,40);
box1.shapeColor = "green";
box2 = new Box(360,235,30,40);
box2.shapeColor = "green";
box3 = new Box(390,235,30,40);
box3.shapeColor = "green";
box4 = new Box(420,235,30,40);
box4.shapeColor = "green";
box5 = new Box(450,235,30,40);
box5.shapeColor = "green";

// seconde layer

box6 = new Box(360,195,30,40);
box6.shapeColor = "blue";
box7 = new Box(390,195,30,40);
box7.shapeColor = "blue";
box8 = new Box(420,195,30,40);
box8.shapeColor = "blue";

// top layer

box9 = new Box(390,155,30,40);
box9.shapeColor = "red";

}


function draw()
{
background("black");
Engine.update(engine);
ball1.display();
rope1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}