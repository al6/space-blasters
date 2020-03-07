import MovingObject from "./moving_object";
class Upgrade extends MovingObject {
  constructor(loot, props) {
    super(props);
    this.name = "upgrade";
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = "./src/images/upgrades/1.png";
    this.height = 20;
    this.width = 30;
    this.loot = loot;
  }

  drawUpgrade() {
    let { ctx, img, posX, posY, velocityY, height, width } = this;
    debugger;
    ctx.drawImage(img, posX, posY, width, height);
    this.posY += velocityY;
    img.onload = function() {
      ctx.drawImage(img, posX, posY, width, height);
    };
  }
}
export default Upgrade;
