var song;
var sliderRate;
var sliderPan;

function setup() {
  createCanvas(500, 500);
  song = loadSound("rtj.mp3", loaded); // sound being loaded
  // button = createButton("play/pause")
  song.setVolume(0.5);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded() {
  song.play();
}

function draw() {
  background(random(255));
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
 }
