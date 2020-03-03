import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";

class Game {
  constructor() {
    // this.canvas = document.getElementById("game-canvas");
    // this.ctx = this.canvas.getContext("2d");
    this.player = new XFighter();
    this.wave = 1;
    this.enemies = [];
    this.enemy = new TieFighter({ velocityY: 2 });
    this.enemies.push(new TieFighter({ velocityY: 2 }));
    this.draw = this.draw.bind(this);
    this.draw();
  }

  draw() {
    const { player, enemies } = this;
    player.drawXFighter();
    enemies.forEach(enemy => enemy.drawTieFighter());
    if (enemies.every(enemy => enemy.posY >= 578)) {
      this.wave += 1;
      this.enemies = [...Array(this.wave).keys()].map(
        () => new TieFighter({ velocityY: 2 })
      );
    }
    requestAnimationFrame(this.draw);
  }
}

export default Game;
