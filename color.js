var song;
var button;
var amp;
var fr = 10;
var barWidth = 20;
var lastBar = -1


function setup() {
  createCanvas(700, 500);
  soundFormats('mp3');
  song = loadSound("./track/sober.mp3", loaded);
  amp = new p5.Amplitude();
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  var vol = amp.getLevel();
  var whichBar = mouseX/ barWidth;
  if (whichBar !== lastBar){
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
  // var diam = map(vol, 0.1, 0.5, 20, 200);
  var diam2 = map(vol, 0, 0.3, 10, 500);
  // var diam3 = map(vol, 0.5, 1, 15, 100);
  fill(random(255),random(255),random(255));
  ellipse(width / 2, height / 2, diam2, diam2);

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
