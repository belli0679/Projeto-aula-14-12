
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var retangulo;
var square;
var ballinha;
var littleball;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	};

	var ball_options = {
		restitution:1,
		friction:2 ,
	};

	var square_options = {
		restitution:1.25,
		friction:0.30,
		frictionAir:0
	};

	var retangulo_options = {
		restitution:1,
		friction:0.1, 
		frictionAir:0
	};

	var ballinha_options = {
		restitution:0.80,
		friction:0.90
	};

	var littleball_options = {
		restitution:0.25,
		friction: 1
	};


	ground = Bodies.rectangle(400, 800, 800, 40, ground_options);
	World.add(world, ground);

	ball = Bodies.circle(280, 20, 80, ball_options);
	World.add(world, ball);

	square = Bodies.rectangle(480, 30, 40, 40, square_options);
	World.add(world, square);

	retangulo = Bodies.rectangle(680, 20, 80, 160, retangulo_options);
	World.add(world, retangulo);

	ballinha = Bodies.circle(500, 50, 20, ballinha_options);
	World.add(world, ballinha);

	littleball = Bodies.circle(100, 5, 40, littleball_options);
	World.add(world, littleball);

	Engine.run(engine);
	

	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {

	background("#5F9EA0");
  
	Engine.update(engine);

	fill("#8B4513")
	rect(ground.position.x,ground.position.y, 800, 40);

	fill("#9ACD32");
	ellipse(ball.position.x, ball.position.y, 80);

	fill("#40E0D0");
	rect(square.position.x, square.position.y, 40, 40);

	fill("#DB7093")
	rect(retangulo.position.x, retangulo.position.y, 80, 160);

	fill("#FFD700");
	ellipse(ballinha.position.x, ballinha.position.y, 20);

	fill("#4B0082");
	ellipse(littleball.position.x, littleball.position.y, 40);

	drawSprites();

}