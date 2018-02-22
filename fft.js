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
  song = loadSound('./track/sober.mp3');
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
  //console.log(spectrum);
  //stroke(255);
  noStroke();
  translate(width / 2, height / 2);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 40, 700);
    //fill(i, 255, 255);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
    //vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  //endShape();


}
