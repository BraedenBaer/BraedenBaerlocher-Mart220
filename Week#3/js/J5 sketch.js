let Apple
let Banana
let Orange
let x = 40;
let y = 40;
let goleft = false;


var counter = 10;

function preload(){
  Apple = createImg('Apple.png')
  Banana = createImg('Banana.jpeg')
  Orange = createImg('Orange.jpeg')
}
function setup()
{
  createCanvas(600,500);
}

function draw()
{

  background(120);
  Apple.position(100,100)
  Apple.size(150,150)
  Banana.position(300,150)
  Banana.size(90,90)
  Orange.position(x,y)
  Orange.size(50,50)
  counter -= 1/60;

  if(goleft == false){
    x= x+1;
  }

  if(goleft == true){
    x= x-1;
  }

  fill(20);
  textSize(20)
  textFont("Times New Roman")
  text(round(counter), 400, 400);
  text("Week#2 Homework",5,25);
  text("Braeden Lee Baerlocher",370,500);
    if(counter <= 0){
      counter = 0;
    }
}
