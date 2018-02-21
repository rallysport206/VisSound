var song;
var button;
var amp;

function setup() {
  createCanvas(500, 500);
  soundFormats('mp3');
  song = loadSound("./track/dna.mp3", loaded);
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
  var diam = map(vol, 0, 0.3, 30, 250);
  var diam2 = map(vol, 0, 0.5, 30, 400);
  var diam3 = map(vol, 0, 0.7, 30, 205);
  fill(255, 255, 0);
  ellipse(width / 4, height / 4, diam, diam);
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, diam2, diam2);
  fill(255, 0, 255);
  ellipse(width / 8, height / 8, diam3, diam3);
  fill(255, 0, 150);
  ellipse(width / 2, height / 8, diam3, diam3);
}


function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}
