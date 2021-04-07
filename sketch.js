
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,treeImg,stone,boyImg,mango,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,sling;

function preload()
{
	treeImg=loadImage("tree.png");
  boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

      ground=Bodies.rectangle(700,700,1400,30);
	World.add(world,ground);

  stone=new Stone(225,450,50,50);
  mango=new Mango(900,300,50);
  mango2=new Mango(950,200,50);
  mango3=new Mango(1200,250,50);
  mango4=new Mango(1000,300,50);
  mango5=new Mango(1000,100,50);

  mango6=new Mango(1100,100,50);
  mango7=new Mango(1100,300,50);
  mango8=new Mango(1000,200,50);
  mango9=new Mango(1100,170,50);

  sling= new Sling(stone.body,{x:225,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  

  
  image(treeImg,800,50,500,650);
   
  image(boyImg,200,325,150,500); 

   rectMode(CENTER);
   rect(700,700,1400,30);

   stone.display();
   mango.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();

   sling.display();





  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
  
      sling.attach(stone.body);

      Matter.body.setPosition(stone.body,{x:225,y:450});
  }
}

