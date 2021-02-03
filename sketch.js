const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImg;
var tree,treeImg;

function preload()
{
	boyImg = loadImage('boy.png');
	treeImg = loadImage('tree.png');
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,698,802,20);
	boy = createSprite(150,650,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.08;
	tree = createSprite(565,450,10,10);
	tree.addImage(treeImg);
	tree.scale = 0.4;
	stone = new Stone(110,600,20);
	chain = new Chain(stone.body,{x: 110,y: 600});
	mango1 = new Mango(500,400,15,50,50);
	mango2 = new Mango(590,380,17,60,60);
	mango3 = new Mango(470,305,12,40,40);
	mango4 = new Mango(610,250,15,50,50);
	mango5 = new Mango(690,370,13,45,45);
	mango6 = new Mango(550,300,18,62,62);

	Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
	background('gray');
	stroke('red');
	fill('red');
	textSize(30);
	text("Press Space to get another chance",50,50);
	detectcollision(stone,mango1);
	detectcollision(stone,mango2);
	detectcollision(stone,mango3);
	detectcollision(stone,mango4);
	detectcollision(stone,mango5);
	detectcollision(stone,mango6);
	
	chain.display();
	ground.display();
	drawSprites();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
}

function detectcollision(Lstone,Lmango){
	mangoPos = Lmango.body.position;
	stonePos = Lstone.body.position;
	
	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x: 110,y: 600});
		chain.attach(stone.body);
	}
}