var bg, hammerS, google, maggelan, pirate, math, pop, qm;
var quizMaster
var button1,button2,button3,button4;
var score = 0;
var minute = 1;
var time = 30
function preload(){

  bg = loadImage("Assets/BGimage.jpg");
  hammerS = loadImage("Assets/download.png");
  google = loadImage("Assets/Google image.jpg");
  maggelan = loadImage("Assets/Maggelan.jpg");
  pirate = loadImage("Assets/Math Image.jpg");
  math = loadImage("Assets/Pirate image.jpg");
  pop = loadImage("Assets/Population.jpg");
  qm = loadImage("Assets/quizmaster.png ");
  }


function setup() {
  createCanvas(windowWidth,windowHeight);

  quizMaster = createSprite(width-100,height-100,10,10);
  quizMaster.addImage(qm);
  quizMaster.scale = 0.8;

  timer();
  
  

}



function draw() {
  background(bg);  
  
textSize(30)
fill("white")
text("Question 1 - Who is the current CEO of google?",width/2-300,height/2)

button1 = createButton("Bill Gates")
button1.position(50,height-160);
button1.size(250,150);
button1.class("buttonStyle");

button2 = createButton("Tim cook")
button2.position(350,height-160);
button2.size(250,150);
button2.class("buttonStyle");

button3 = createButton("Sundar Pichai")
button3.position(650,height-160);
button3.size(250,150);
button3.class("buttonStyle");
button3.mouseClicked(scoreKeeper);

button4 = createButton("Elon Musk")
button4.position(950,height-160);
button4.size(250,150);
button4.class("buttonStyle");

image(google,width-350,30,300,150)

text("Score = "+ score,50,50);
text("Timer = " + time, width/2-100,50)
console.log(score,time)

drawSprites();
}

function countDown(){
  var m = Math.floor(time/60)
  var sec = time%60;
  time = time - 1
  
}

function timer(){
  setInterval(countDown,1000)
}


function scoreKeeper(){
  score = score + 5
}

