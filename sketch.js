function preload(){
  mybg = loadImage("nature11.jpeg")
  narutosong = loadSound("naruto.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  s1 = createSlider(0,1,0.1,0.1);
  narutosong.play()
}

function draw() {
  background(mybg);
  narutosong.setVolume(s1.value())
}