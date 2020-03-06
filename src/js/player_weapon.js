import MovingObject from "./moving_object";

class PlayerWeapon extends MovingObject {
  constructor(name, props) {
    super(props);
    this.status = "active";
    this.name = name;
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    let { img } = this;
    switch (name) {
      case "laser1":
        img.src = "./src/images/weapons/laser1.png";
        break;
      case "laser2":
        img.src = "./src/images/weapons/laser2.png";
        break;
      default:
        break;
    }
  }

  draw() {
    let { ctx, img, posX, posY, velocityY } = this;
    posY += velocityY;
    ctx.drawImage(img, posX, posY);
  }
}

export default PlayerWeapon;
