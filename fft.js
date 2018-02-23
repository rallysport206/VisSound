var song;
var fft;
var button;

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

function preload() {
  song = loadSound('./track/rtj.mp3');
  button = createButton("play");
  button.mousePressed(togglePlaying);
}


function setup() {
  createCanvas(700, 500);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  fft = new p5.FFT(0.9, 128);
}

function draw() {
  background(51);
  var spectrum = fft.analyze();
  noStroke();
  translate(width / 2, height / 2);
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 40, 500);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
  }
}
