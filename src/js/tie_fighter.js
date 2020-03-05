import PlayerWeapon from "./player_weapon";
import MovingObject from "./moving_object";

class TieFighter extends MovingObject {
  constructor(img, props) {
    super(props);
    this.name = "TieFighter";
    this.weapon = "laser1";
    this.hp = 2;
    this.loot = [
      { name: "laser2", droprate: 0.3 },
      { name: "laser3", droprate: 0.2 },
      { name: "raygun", droprate: 0.1 },
      { name: "bigboy", droprate: 0.07 },
      { name: "antimatter", droprate: 0.05 }
    ];
    this.loot = this.loot[Math.floor(Math.random() * this.loot.length)];
    let rand = Math.ceil(Math.random() * 100);
    if (this.loot["droprate"] * 100 > rand) {
      this.loot = this.loot["name"];
    } else {
      this.loot = [];
    }
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = img
    this.posX = Math.floor(Math.random() * 831);
    this.posY = Math.floor(Math.random() * -1000);
    this.height = 30;
    this.width = 80;
    this.projectiles = [];
  }

  drawTieFighter() {
    let { ctx, img, posX, posY, velocityY, height, width } = this;
    if (this.hp <= 0) {
      // let explosion = new Explosion(this.loot, posX, posY, velocityY)
      //after 50 ms create and draw upgrade item
    } else if (this.hp > 0) {
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
export default TieFighter;
