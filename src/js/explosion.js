import MovingObject from "./moving_object";
class Explosion extends MovingObject {
  constructor(loot, props) {
    super(props);
    this.name = "explosion";
    this.hp = 64;
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = "./src/images/explosions/explosion_sprite_sheet.png";
    this.sX = 0;
    this.sY = 0;
    this.sWidth = 512;
    this.sHeight = 512;
    this.height = 50;
    this.width = 80;
    this.scale = 5;
    this.loot = loot;
  }

  drawExplosion() {
    let {
      ctx,
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
      ctx.drawImage(
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
    img.onload = function() {
      ctx.drawImage(img, posX, posY, width, height);
    };
  }
}
export default Explosion;
