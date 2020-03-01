class XFighter {
  constructor(canvas, imgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = `${imgSrc}`;
    this.x = canvas.width * 1.4;
    this.y = canvas.height * 3.85;
    this.height = 80;
    this.width = 30;
    this.upPressed = false;
    this.rightPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.drawXFighter = this.drawXFighter.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    document.addEventListener("keyup", this.keyUpHandler, false);
    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = false;
    }
  }

  keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = true;
      if (this.x >= this.canvas.width - 3 * this.width) {
      } else {
        this.x += this.canvas.height / 20;
      }
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = true;
      if (this.x <= 0) {
      } else {
        this.x -= this.canvas.height / 20;
      }
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPressed = true;
      if (this.y <= 0) {
      } else {
        this.y -= this.canvas.height / 20;
      }
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPressed = true;
      if (this.y >= this.canvas.height - this.height + 20) {
      } else {
        this.y += this.canvas.height / 20;
      }
    }
  }

  drawXFighter() {
    const { canvas, ctx, img, x, y, height, width } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, height, width);
    debugger;
    img.onload = function() {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(img, x, y, height, width);
    };
    requestAnimationFrame(this.drawXFighter);
  }
}
export default XFighter;
