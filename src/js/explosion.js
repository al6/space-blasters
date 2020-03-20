import MovingObject from "./moving_object";
class Explosion extends MovingObject {
  constructor(loot, props, img) {
    super(props);
    this.name = "explosion";
    this.hp = 64;
    this.img = img;
    this.sX = 0;
    this.sY = 0;
    this.sWidth = 512;
    this.sHeight = 512;
    this.height = 50;
    this.width = 80;
    this.scale = 5;
    this.loot = loot;
  }

  draw() {
    let {
      context,
      img,
      sX,
      sY,
      sWidth,
      sHeight,
      posX,
      posY,
      height,
      width,
      scale
    } = this;

    if (this.hp > 0) {
      context.drawImage(
        img,
        sX,
        sY,
        sWidth,
        sHeight,
        posX - 170,
        posY - 100,
        width * scale,
        height * scale
      );
    }
  }
}
export default Explosion;
