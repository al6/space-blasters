class GameCanvas {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    this.playingStatus = document.getElementById("sound");
    this.notPlayingStatus = document.getElementById("no-sound");
  }
}

export default GameCanvas;
