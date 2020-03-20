import MovingObject from "./moving_object";
class BackgroundLayer extends MovingObject {
  constructor(canvas, imgSrc, props) {
    super(props);
    this.canvas = canvas;
    this.canvas.width = 450;
    this.canvas.height = 700;
    this.context = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = `${imgSrc}`;
  }

  draw() {
    let { canvas, context, img, posY, velocityY } = this;
    this.posY += velocityY;
    context.clearRect(0, 0, 450, 700);
    context.drawImage(img, 0, -700 + posY);
    context.drawImage(img, 0, posY);
    if (posY >= canvas.height) {
      this.posY = 0;
    } else if (posY < -700) {
      this.posY = 1;
    }
  }
}

export default BackgroundLayer;
