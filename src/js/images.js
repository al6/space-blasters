import drawBackground from "./background";

class Images {
  constructor() {
    this.background = drawBackground();

    this.tieFighterImg = new Image();
    this.tieFighterImg.src = "./src/images/tie-advanced.png";

    this.playerImg = new Image();
    this.playerImg.src = "./src/images/xwing.png";

    this.upgradeImg = new Image();
    this.upgradeImg.src = "./src/images/upgrades/upgrades1.png";

    this.explosionImg = new Image();
    this.explosionImg.src =
      "./src/images/explosions/explosion_sprite_sheet.png";
  }
}

export default Images;
