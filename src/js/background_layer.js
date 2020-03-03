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
    function loop() {
      // const pattern = ctx.createPattern(img, "repeat"); // Create a pattern with this image, and set it to "repeat".
      // ctx.fillStyle = pattern;
      // ctx.fillRect(posY, posX, canvas.width, canvas.height); // ctx.fillRect(x, y, width, height);

      ctx.clearRect(0, 0, 450, 700);
      ctx.drawImage(img, 0, posY);
      ctx.drawImage(img, 0, posY - canvas.height);
      posY += velocityY;
      if (posY >= canvas.height) {
        posY = 0;
      } else if (posY < -700) {
        posY = 1;
      }
      requestAnimationFrame(loop);
    }
    loop();
  }
}

export default BackgroundLayer;
