import XFighter from "./x_fighter";

class Game {
  constructor() {
    // this.canvas = document.getElementById("game-canvas");
    // this.ctx = this.canvas.getContext("2d");
    this.player = new XFighter();
    this.wave = 1;
    this.draw = this.draw.bind(this);
    this.draw();
  }

  draw() {
    const { player } = this;
    player.drawXFighter();
    requestAnimationFrame(this.draw);
  }
}

export default Game;
