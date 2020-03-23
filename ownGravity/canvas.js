let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let color = ["#7FD1FF", "#7382FF", "#FF4248", "#9542FF", "#FB4EFF"];



function Player(posX, posY, width, height, speed) {
  let stop = false;
  this.posX = posX;
  this.posY = posY;
  this.width = width;
  this.height = height;
  this.speed = speed;

  this.draw = function() {
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.fill();

    this.update();
  };

  this.update = function() {

    if (this.posY + this.height > innerHeight) {
      // console.log("Con");
      // this.speed = 0;
      stop = true;
    }
    if (!stop) {
      this.posY += speed;
    }
  };
}

let anil = new Player(innerWidth / 2, innerHeight / 2, 200, 200, 5);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  anil.draw();
  // player.draw();
}

animate();
