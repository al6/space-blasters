import PlayerWeapon from "./player_weapon";
import MovingObject from "./moving_object";
import sounds, { SOUNDS } from "./sounds";

class TieFighter extends MovingObject {
  constructor(img, props) {
    super(props);
    this.name = "TieFighter";
    this.weapon = "red-laser";
    this.hp = 5;
    this.loot = [{ name: "upgrade", droprate: 0.04 }];
    this.loot = this.loot[Math.floor(Math.random() * this.loot.length)];
    let rand = Math.ceil(Math.random() * 100);
    if (this.loot["droprate"] * 100 > rand) {
      this.loot = this.loot["name"];
    } else {
      this.loot = null;
    }
    this.img = img;
    this.posX = Math.floor(Math.random() * 731);
    this.posY = Math.floor(Math.random() * -800);
    this.height = 40;
    this.width = 80;
    this.projectiles = [];
  }

  draw() {
    let { context, img, posX, posY, velocityY, height, width } = this;
    context.drawImage(img, posX, posY, width, height);
    this.posY += velocityY;
  }

  fireWeapon() {
    sounds.playSound(SOUNDS.ENEMY_LASER);
    let x;
    switch (this.weapon) {
      case "red-laser":
        x = new PlayerWeapon("red-laser", {
          velocityY: 5,
          posX: Math.floor(this.posX + 48),
          posY: Math.floor(this.posY - 10)
        });
        this.projectiles.push(x);
        break;
      default:
        break;
    }
  }
}
export default TieFighter;
