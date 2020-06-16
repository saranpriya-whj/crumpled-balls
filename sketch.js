const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, slingShot;
var wall1,wall2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    ball = new Ball(200,200,20,20);

    slingShot = new slingshot(ball.body, {x : 200, y : 100});

    wall1 = new Box(800,350,5,100);
    wall2 = new Box(900,350,5,100);

}

function draw(){
    background("grey");
    Engine.update(engine);

    ground.display();

    ball.display();

    slingShot.display(); 
    
    wall1.display();
    wall2.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x : mouseX, y : mouseY})
}

function mouseReleased() {
    slingShot.fly();
} 