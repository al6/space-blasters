import MovingObject from "./moving_object";
class BackgroundLayer extends MovingObject {
  constructor(canvas, imgSrc, props) {
    super(props);
    this.canvas = canvas;
    this.canvas.width = 450;
    this.canvas.height = 700;
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = `${imgSrc}`;
  }

  draw() {
    let { canvas, ctx, img, posY, velocityY } = this;
    this.posY += velocityY;
    ctx.clearRect(0, 0, 450, 700);
    ctx.drawImage(img, 0, -700 + posY);
    ctx.drawImage(img, 0, 700 + posY);
    ctx.drawImage(img, 0, posY);
    if (posY >= canvas.height) {
      this.posY = 0;
    } else if (posY < -700) {
      this.posY = 1;
    }
  }
}

export default BackgroundLayer;
