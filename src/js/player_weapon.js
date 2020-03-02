import MovingObject from "./moving_object";

class PlayerWeapon extends MovingObject {
  constructor(name, props) {
    super(props);
    this.canvas = document.getElementById("game-canvas");
    this.canvas.width = 450;
    this.canvas.height = 700;
    this.name = name;
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    let { img } = this;
    switch (name) {
      case "laser1":
        img.src = "./src/images/weapons/laser1.png";
        break;
      case "laser2":
        img.src = "./src/images/ship.png/";
        break;
      default:
        break;
    }
  }

  draw() {
    let { canvas, ctx, img, posX, posY, velocityY } = this;
    // function loop() {
    posY += velocityY;
    ctx.drawImage(img, posX, posY);
    // ctx.drawImage(img, 0, posY - canvas.height);

    if (posY <= -canvas.height || posY >= canvas.height) {
      posY = 0;
    }
    // setTimeout(() => requestAnimationFrame(loop), 60);
    // }
    // requestAnimationFrame(loop);
  }
}

export default PlayerWeapon;
