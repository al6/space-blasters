class GameCanvas {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
  }
}

export default GameCanvas;
