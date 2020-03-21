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
      case "red-laser":
        img.src = "./src/images/weapons/red_laser.png";
        this.hp = 1;
        break;
      case "laser1": // light blue
        img.src = "./src/images/weapons/laser1.png";
        this.hp = 2;
        break;
      case "laser2": // yellow
        img.src = "./src/images/weapons/laser2.png";
        this.hp = 4;
        break;
      case "laser3": // purple
        img.src = "./src/images/weapons/laser3.png";
        this.hp = 8;
        break;
      case "laser4": // blue
        img.src = "./src/images/weapons/laser4.png";
        this.hp = 16;
        break;
      case "laser5": // green
        img.src = "./src/images/weapons/laser5.png";
        this.hp = 32;
        break;
      default:
        break;
    }
  }

  draw() {
    let { ctx, img, posX, posY, velocityY } = this;
    this.posY += velocityY;
    ctx.drawImage(img, posX, posY);
  }
}

export default PlayerWeapon;
