var mycircle;
var circle = [];

var myImage;
var myAnimation
var animations = [];

function preload() {

}

function setup() {

createCanvas(800, 500);

myAnimation = new animationImage("./images/Idle_001.png", 100,250, 150, 150);
animations[i] = myAnimation

mycircle = new MyCircle(random(17, width), random(20, height), random(5, 150));
mycircle2 = new MyCircle(random(120,width), random(380, height), random(5, 30));
mycircle3 = new MyCircle(random(120,width), random(380, height), random(5, 30));

}

function draw() {

background(120);

myAnimation.drawAnimation();

mycircle.drawCircle();
mycircle2.drawCircle();
mycircle3.drawCircle();
}