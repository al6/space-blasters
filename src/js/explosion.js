import PlayerWeapon from "./player_weapon";
import MovingObject from "./moving_object";

class Explosion extends MovingObject {
  constructor(loot, props) {
    super(props);
    this.name = "Explosion";
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.images = [];
    this.img = new Image();
    this.img.src = "./src/images/tie-fighter.png";
    this.images.push(this.img);
    this.posX = Math.floor(Math.random() * 831);
    this.posY = Math.floor(Math.random() * -1000);
    this.height = 30;
    this.width = 80;
    this.loot = loot;
  }

  drawExplosion() {
    let { ctx, img, posX, posY, velocityY, height, width } = this;
    if(){
      ctx.drawImage(img, posX, posY, width, height);
      if (this.posY < 650) {
        this.posY += velocityY;
      }
    }  
      

    img.onload = function() {
      ctx.drawImage(img, posX, posY, width, height);
    };
  }

  fireWeapon() {
    let laser, x, y;
    switch (this.weapon) {
      case "laser1":
        laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
        laser.play();
        x = new PlayerWeapon("laser1", {
          velocityY: 1,
          posX: this.x + 33,
          posY: this.y + 10
        });
        this.projectiles.push(x);
        break;
      case "laser2":
        laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
        laser.play();
        x = new PlayerWeapon("laser1", {
          velocityY: -5,
          posX: this.x + 53,
          posY: this.y - 10
        });
        y = new PlayerWeapon("laser1", {
          velocityY: -5,
          posX: this.x + 13,
          posY: this.y - 10
        });
        this.projectiles.push(x);
        this.projectiles.push(y);
        break;
      default:
        break;
    }
  }
}
export default Explosion;
