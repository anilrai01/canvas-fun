let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let ctx = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined
};

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

window.addEventListener("mousemove", function(event) {
  //   this.console.log(event);
  mouse.x = event.x;
  mouse.y = event.y;
  //   this.console.log(mouse);
});

window.addEventListener("resize", function() {
  canvas.width = this.innerWidth;
  canvas.height = this.innerHeight;

  init();
});

let color = ["#7FD1FF", "#7382FF", "#FF4248", "#9542FF", "#FB4EFF"];

function Circle(x, y, dx, dy, rad) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.minRadius = rad;
  this.maxRadius = 100;
  this.dx = dx;
  this.dy = dy;
  this.color = color[Math.round(Math.random() * color.length)];

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.stroke();

    this.update();
  };

  this.update = function() {
    if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.rad > innerHeight || this.y - this.rad < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    //Interract
    if (getDistance(this.x, this.y, mouse.x, mouse.y) < 80) {
      //   console.log("Expand");
      if (this.rad < this.maxRadius) {
        this.rad += 3;
      }
    } else if (this.rad > this.minRadius) {
      this.rad -= 3;
    }
  };
}

// console.log(getDistance(2, 1, 5, 5));
let circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < 150; i++) {
    let rad = 20;
    let x = Math.random() * (innerWidth - rad * 2) + rad;
    let y = Math.random() * (innerHeight - rad * 2) + rad;
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x, y, dx, dy, rad));
  }
}

init();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
  }
}

animate();
