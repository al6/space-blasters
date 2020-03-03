import PlayerWeapon from "./player_weapon";
import MovingObject from "./moving_object";

class TieFighter extends MovingObject {
  constructor(props) {
    super(props);
    this.weapon = "laser1";
    this.hp = 2;
    this.loot = ["upgrade weapon"];
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = "./src/images/tie-fighter.png";
    this.x = Math.floor(Math.random() * 831);
    this.posY = Math.floor(Math.random() * -1000);
    this.height = 40;
    this.width = 80;
    this.projectiles = [];
  }

  drawTieFighter() {
    let { ctx, img, x, posY, velocityY, height, width, projectiles } = this;
    if (this.hp <= 0) {
      //explosion effect
      //after 50 ms create and draw upgrade item
    } else if (this.hp > 0) {
      ctx.drawImage(img, x, posY, width, height);
      if (this.posY < 600) {
        this.posY += velocityY;
      }
    }

    // projectiles.forEach(projectile => {
    //   if (projectile.posY >= 0) {
    //     projectile.posY += projectile.velocityY;
    //     projectile.draw();
    //   } else {
    //     projectiles.splice(projectiles.indexOf(projectile), 1);
    //   }
    // });
    img.onload = function() {
      ctx.drawImage(img, x, posY, width, height);
    };
  }

  fireWeapon() {
    let laser, x, y;
    switch (this.weapon) {
      case "laser1":
        laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
        laser.play();
        x = new PlayerWeapon("laser1", {
          velocityY: 5,
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
export default TieFighter;
