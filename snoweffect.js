// Change the following variables to customize the appearance of the particles
var numParticles = window.innerWidth / 3;
var maxSpeed = 2.5;
var minSpeed = 1;
var maxSize = 120;
var minSize = 30;
var maxOpacity = 1;
var minOpacity = 0.2;
var canvasId = "snowcanvas";

// If the following is true, the canvas resolution will be set to match the full viewport width and height.
var fixCanvasResolution = true;

var imageArray = [
  "q1.webp",
  "q2.webp",
  "q3.webp",
  "q4.webp",
  "q5.webp",
  "q6.webp",
  "q7.webp",
  "q8.webp",
  "q9.webp",
  "q10.webp",
  "q11.webp",
  "q12.webp",
  "q13.webp",
  "q14.webp",
  "q15.webp",
  "q16.webp",
  "q17.webp",
  "q18.webp",
];
var images = [];

var snow_particles = [];

window.onload = function () {
  for (var i = 0; i < imageArray.length; i++) {
    var image = new Image();
    image.src = "images/" + imageArray[i];
    images.push(image);
  }

  if (fixCanvasResolution) {
    var c = document.getElementById(canvasId);
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }

  InitPoints();

  setInterval(Redraw, 5);
};

function Redraw() {
  var c = document.getElementById(canvasId);
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  for (i = 0; i < snow_particles.length; i++) {
    var newYPos = snow_particles[i].yPos + snow_particles[i].speed;
    if (newYPos > window.innerHeight) {
      newYPos = getRandomInt(-100, -10);
      snow_particles[i].xPos = getRandomInt(0, window.innerWidth);
      snow_particles[i].speed =
        Math.random() * (maxSpeed - minSpeed) + minSpeed;
      snow_particles[i].opacity =
        Math.random() * (maxOpacity - minOpacity) + minOpacity;
      snow_particles[i].size = Math.random() * (maxSize - minSize) + minSize;
      snow_particles[i].image =
        images[Math.floor(Math.random() * images.length)];
    }
    snow_particles[i].yPos = newYPos;
    ctx.drawImage(
      snow_particles[i].image,
      snow_particles[i].xPos,
      newYPos,
      snow_particles[i].size,
      snow_particles[i].size
    );
  }
}

function InitPoints() {
  for (i = 0; i < numParticles; i++) {
    var startX = getRandomInt(0, window.innerWidth);
    var startY = getRandomInt(0, window.innerHeight);
    var speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    var opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
    var size = Math.random() * (maxSize - minSize) + minSize;

    snow_particles.push({
      xPos: startX,
      yPos: startY,
      speed: speed,
      opacity: opacity,
      size: size,
    });
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
