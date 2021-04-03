var twinkle, bingo, blackS, londonBridge, oldMac, ABC, fingerPress, Tsound, Bsound, BRsound, oldMacSound, ABCsound, BBSsound, bg; 
var fingerPressImg, bgIMG;

function preload() {
  fingerPressImg = loadImage("ASongFinger.png");
  Tsound = loadSound("Tsound.wav");
  Bsound = loadSound("bingoSong.wav");
  BRsound = loadSound("bridgeSound.wav");
  BBSsound = loadSound("sheepSound.wav");
  oldMacSound = loadSound("oldMacSound.wav");
  ABCsound = loadSound("ABCsound.wav");
  bgIMG = loadImage("bgBG.jpg");
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(500, 300);
  bg.addImage(bgIMG);
  bg.scale = 0.5;

  twinkle = createSprite(80, 550, 140, 25);
  twinkle.shapeColor = "red";
  // twinkle.debug = true;

  bingo = createSprite(240, 550, 140, 25);
  bingo.shapeColor = "orange";

  blackS = createSprite(405, 550, 150, 25);
  blackS.shapeColor = "yellow";

  londonBridge = createSprite(575, 550, 150, 25);
  londonBridge.shapeColor = "green";

  oldMac = createSprite(745, 550, 150, 25);
  oldMac.shapeColor = "blue";

  ABC = createSprite(915, 550, 150, 25);
  ABC.shapeColor = "purple";

  fingerPress = createSprite(500, 300);
  fingerPress.scale = 0.09;
  fingerPress.addImage(fingerPressImg);
  fingerPress.velocityX = 5;
  fingerPress.velocityY = -3;
  // fingerPress.debug = true;

}

function draw() {
  background(0); 

  edges = createEdgeSprites();
  fingerPress.bounceOff(edges);

  // fingerPress.bounceOff(twinkle);
  // fingerPress.bounceOff(bingo);
  // fingerPress.bounceOff(blackS);
  // fingerPress.bounceOff(londonBridge);
  // fingerPress.bounceOff(oldMac);
  // fingerPress.bounceOff(ABC);

  if(fingerPress.isTouching(twinkle) && fingerPress.bounceOff(twinkle)) {
    fingerPress.tint = "red";
    Bsound.stop();
    BBSsound.stop();
    BRsound.stop();
    oldMacSound.stop();
    ABCsound.stop();
    Tsound.play();
  } else if(fingerPress.isTouching(bingo) && fingerPress.bounceOff(bingo)) {
      fingerPress.tint = "orange";
      Bsound.play();
      BBSsound.stop();
      BRsound.stop();
      oldMacSound.stop();
      ABCsound.stop();
      Tsound.stop();
  } else if(fingerPress.isTouching(blackS) && fingerPress.bounceOff(blackS)) {
      fingerPress.tint = "yellow";
      BBSsound.play();
      BRsound.stop();
      oldMacSound.stop();
      ABCsound.stop();
      Bsound.stop();
      Tsound.stop();
  } else if(fingerPress.isTouching(londonBridge) && fingerPress.bounceOff(londonBridge)) {
      fingerPress.tint = "green";
      BBSsound.stop();
      BRsound.play();
      oldMacSound.stop();
      ABCsound.stop();
      Bsound.stop();
      Tsound.stop();
  } else if(fingerPress.isTouching(oldMac) && fingerPress.bounceOff(oldMac)) {
      fingerPress.tint = "blue";
      oldMacSound.play();
      BBSsound.stop();
      BRsound.stop();
      ABCsound.stop();
      Bsound.stop();
      Tsound.stop();
  } else if(fingerPress.isTouching(ABC) && fingerPress.bounceOff(ABC)) {
      fingerPress.tint = "purple";
      oldMacSound.stop();
      BBSsound.stop();
      BRsound.stop();
      ABCsound.play();
      Bsound.stop();
      Tsound.stop();
  }

  drawSprites();

  fill("white");
  textSize(15);
  text("Twinkle Twinkle", 27.5, 555);
  text("B-I-N-G-O", 205, 555);

  fill("black");
  text("Black Sheep", 365, 555);
  text("London Bridge", 525, 555);

  fill("white");
  text("Old Mac.", 720, 555);
  text("A-B-C", 890, 555);
}


