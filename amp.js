var song;
var button;
var amp;
var fr =10;

function setup() {
  createCanvas(700, 500);
  soundFormats('mp3');
  song = loadSound("./track/sober.mp3", loaded);
  amp = new p5.Amplitude();
  background(51);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(51);
  var vol = amp.getLevel();
  var diam = map(vol, 0.1, 0.5, 20, 200);
  var diam2 = map(vol, 0, 0.3, 10, 240);
  var diam3 = map(vol, 0.5, 1, 15, 100);
  var diam4 = map(vol, 0.5, 1, 40, 300);
  // fill(255, 20, 30);
  // fill(random(255),random(255),random(255));
  ellipse(width / 4, height / 4, diam, diam);
  fill(25, 201, 150);
  fill(random(255),random(255),random(255));
  ellipse(width / 2, height / 2, diam2, diam2);
  fill(random(255),random(255),random(255));
  // fill(0, 251, 0);
  ellipse(height / 8, width / 8, diam4, diam4);
  // fill(25, 201, 150);
  fill(random(255),random(255),random(255));
  ellipse(width / 2, height / 8, diam3, diam3);
  fill(random(255),random(255),random(255));
  ellipse(random(width), random(height), diam2, diam2);
  fill(random(255),random(255),random(255));
  ellipse(random(width), random(height), diam, diam);
  fill(random(255),random(255),random(255));
  ellipse(random(width), random(height), diam2, diam2);
  fill(random(255),random(255),random(255));
  ellipse(random(width), random(height), diam3, diam3);
  frameRate(fr);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}
