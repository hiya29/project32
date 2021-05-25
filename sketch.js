const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ball1;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6;
var world;
var stand1,stand2,stand3stand4,stand5,stand6;

function setup() {
  createCanvas(900,500);

  engine = Engine.create();
	world = engine.world;


  ball1 = new ball(75,300,20);

  slingshot = new Slingshot(ball1.body,{x:75,y:300});

  enemy1 = new enemy(750,100,50,50);
  stand1 = new stand(760,150,100,10);
  enemy2 = new enemy(450,150,50,50);
  stand2 = new stand(460,200,100,10);
  enemy3 = new enemy(350,50,50,50);
  stand3 = new stand(360,100,100,10);
  enemy4 = new enemy(800,350,50,50);
  stand4 = new stand(810,400,100,10);
  enemy5 = new enemy(600,350,50,50);
  stand5 = new stand(610,400,100,10);
  enemy6 = new enemy(325,415,50,50);
  stand6 = new stand(335,465,100,10);

  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();

  textSize(20);
  fill("pink");
  text("Kill the monsters with the ball",100,30);
  text("Press Space for second chance!",100,50);
  
   //console.log(mouseX);
   //console.log(mouseY);

  ball1.display();
  slingshot.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
if (keyCode === 32) {
  Matter.Body.setPosition(ball1.body, {x:75, y:300}) 
 slingshot.attach(ball1.body);
}
}