import MovingObject from "./moving_object";
class Explosion extends MovingObject {
  constructor(loot, props) {
    super(props);
    this.name = "explosion";
    this.hp = 60;
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src =
      "./src/images/explosions/halfsized/tie_fighter_explosion_frames/1.png";
    this.height = 50;
    this.width = 80;
    this.loot = loot;
  }

  drawExplosion() {
    let { ctx, img, posX, posY, velocityY, height, width } = this;
    debugger;
    if (this.hp > 0) {
      ctx.drawImage(img, posX, posY, width, height);
      this.posY += velocityY;
    }
    img.onload = function() {
      ctx.drawImage(img, posX, posY, width, height);
    };
  }
}
export default Explosion;
