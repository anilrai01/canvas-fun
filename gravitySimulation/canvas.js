let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let ctx = canvas.getContext("2d");

//Utility Function
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomColor(colors) {
  return colors[Math.round(Math.random() * colors.length)];
}

//Colors
// let colors = ["#FFAE82", "#DA76E8", "#CD82FF", "#8D82FF", "#FF8FE1", "#4DEB8F"];
// let colors = ["#8A7AFF", "#AC31EB", "#FF0AA2", "#EB422D", "#FF6803"];
// let colors = ["#FF4636", "#FFE769", "#FF5D4F", "#36FF8F", "#4F42FF"];
let colors = ["#90FF43", "#FF5E4F", "#883CE8", "#42D7FF"];

window.addEventListener("resize", function() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  init();
});

window.addEventListener("click", function() {
  init();
});

let balls = prompt("How many particles do you wanna see: ");

let gravity = 1;
let friction = 0.9;

function Circle(x, y, dx, dy, rad, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rad = rad;
  this.color = color;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    this.update();
  };
  this.update = function() {
    if (this.y + this.rad + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
      console.log(this.dy);
    } else {
      this.dy += gravity;
      //   console.log(this.dy);
    }
    if (this.x + this.rad > canvas.width || this.x - this.rad < 0) {
      this.dx = -this.dx;
    }
    this.y += this.dy;
    this.x += this.dx;
  };
}

let playerArray;
function init() {
  playerArray = [];
  for (let i = 0; i < balls; i++) {
    let rad = randomInt(20, 30);
    let x = randomInt(rad, canvas.width - rad * 2);
    let y = randomInt(0, canvas.height - rad * 2);
    let dx = randomInt(-2, 2);
    let dy = randomInt(-2, 2);
    let color = randomColor(colors);
    playerArray.push(new Circle(x, y, dx, dy, rad, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < playerArray.length; i++) {
    playerArray[i].draw();
  }
}

init();
animate();
