import MovingObject from "./moving_object";

class BackgroundLayer extends MovingObject {
  constructor(canvas, imgSrc, velocityY) {
    super(velocityY);
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = `${imgSrc}`;
  }

  draw() {
    const { canvas, ctx, img, pattern, posX, posY } = this;
    canvas.width = 450;
    canvas.height = 700;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = pattern;
    // ctx.fillRect(posX, posY, canvas.width, canvas.height);
    img.onload = function() {
      ctx.clearRect(0, 0, 450, 700);
      let pattern = ctx.createPattern(img, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(posX, posY, canvas.width, canvas.height);
    };
  }
}

export default BackgroundLayer;
