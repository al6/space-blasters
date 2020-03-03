import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";

class Game {
  constructor() {
    // this.canvas = document.getElementById("game-canvas");
    // this.ctx = this.canvas.getContext("2d");
    this.player = new XFighter();
    this.wave = 1;
    this.enemy = new TieFighter({ velocityY: 2 });
    this.draw = this.draw.bind(this);
    this.draw();
  }

  draw() {
    const { player, enemy } = this;
    player.drawXFighter();
    enemy.drawTieFighter();
    requestAnimationFrame(this.draw);
  }
}

export default Game;
