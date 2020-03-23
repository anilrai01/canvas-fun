let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let color = ["#7FD1FF", "#7382FF", "#FF4248", "#9542FF", "#FB4EFF"];

// ctx.fillStyle = "rgba(255,0,0,0.5)";
// ctx.fillRect(100, 100, 150, 150);

// ctx.beginPath();
// ctx.moveTo(350, 300);
// ctx.lineTo(100, 500);
// ctx.strokeStyle = "#1e90ff";
// ctx.stroke();

// //arc
// // ctx.beginPath();
// // ctx.arc(600, 300, 30, 0, Math.PI * 2, false);
// // ctx.stroke();

// for (let i = 0; i < 4; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.fillStyle = color[Math.round(Math.random() * color.length)];
//   ctx.fill();
//   // ctx.stroke();
// }

// let x = Math.random() * (innerWidth - 30) + 30;
// let y = Math.random() * (innerHeight - 30) + 30;
// let dx = (Math.random() - 0.5) * 5;
// let dy = (Math.random() - 0.5) * 5;
// let radius = 30;
// //

function Circle(x, y, dx, dy, rad) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.dx = dx;
  this.dy = dy;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    // ctx.fillStyle = color [ ]
    ctx.stroke();

    this.update();
  };

  this.update = function() {
    // console.log("I am update");
    if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.rad > innerHeight || this.y - this.rad < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  };
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
  let rad = Math.random() * 20 + 10;
  let x = Math.random() * (innerWidth - rad * 2) + rad;
  let y = Math.random() * (innerHeight - rad * 2) + rad;
  let dx = (Math.random() - 0.5) * 4;
  let dy = (Math.random() - 0.5) * 5;
  circleArray.push(new Circle(x, y, dx, dy, rad));
}

console.log(circleArray);
// let circle1 = new Circle(100, 200, 4, 5, 20);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
  }

  // circle1.draw();
  // console.log("s");
}

animate();
