var mycircle;
var circle = [];

var myImage;
var myAnimation
var animations = [];

var i = 0;

function preload() {

}

function setup() {

createCanvas(800, 500);

myAnimation = new animationImage("./images/Idle__001.png", 100,250, 150, 150);
animations[0] = myAnimation
myAnimation = new animationImage("./images/Idle__002.png", 100,250, 150, 150);
animations[1] = myAnimation
myAnimation = new animationImage("./images/Idle__003.png", 100,250, 150, 150);
animations[2] = myAnimation
myAnimation = new animationImage("./images/Idle__004.png", 100,250, 150, 150);
animations[3] = myAnimation
myAnimation = new animationImage("./images/Idle__005.png", 100,250, 150, 150);
animations[4] = myAnimation
myAnimation = new animationImage("./images/Idle__006.png", 100,250, 150, 150);
animations[5] = myAnimation
myAnimation = new animationImage("./images/Idle__007.png", 100,250, 150, 150);
animations[6] = myAnimation
myAnimation = new animationImage("./images/Idle__008.png", 100,250, 150, 150);
animations[7] = myAnimation
myAnimation = new animationImage("./images/Idle__009.png", 100,250, 150, 150);
animations[8] = myAnimation

setInterval(incrementIdleIndex, 50);



mycircle = new MyCircle(random(17, width), random(20, height), random(5, 150));
mycircle2 = new MyCircle(random(120,width), random(380, height), random(5, 30));
mycircle3 = new MyCircle(random(120,width), random(380, height), random(5, 30));

}

function draw() {

background(120);
//for(var i =0; i < animations.length; i++)

    {
animations[i].drawAnimation();
    }

mycircle.drawCircle();
mycircle2.drawCircle();
mycircle3.drawCircle();
}

function incrementIdleIndex()
{
  i++;
  if(i >= animations.length)
  {
    i = 0;
  }
}