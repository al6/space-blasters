import MovingObject from "./moving_object";

class Upgrade extends MovingObject {
  constructor(img, loot, props) {
    super(props);
    this.name = "upgrade";
    this.img = img;
    this.height = 20;
    this.width = 30;
    this.loot = loot;
  }

  drawUpgrade() {
    let { context, img, posX, posY, velocityY, height, width } = this;
    context.drawImage(img, posX, posY, width, height);
    this.posY += velocityY;
    img.onload = function() {
      context.drawImage(img, posX, posY, width, height);
    };
  }
}
export default Upgrade;
