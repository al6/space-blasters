import "./styles/index.scss";
import Game from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  window.muted = true;
  window.bgMusic = new Audio("./src/sounds/sw.mp3");
  window.bgMusic.volume = 0.1;
  bgMusic.loop = true;

  window.playerImg = new Image();
  window.playerImg.src = "./src/images/xwing.png";
  window.playerImg.onload = function() {
    let canvas = document.getElementById("game-canvas");
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    new Game();
  };

  let playingStatus = document.getElementById("sound");
  let notPlayingStatus = document.getElementById("no-sound");

  playingStatus.addEventListener("click", () => {
    playingStatus.classList.toggle("hidden");
    notPlayingStatus.classList.toggle("hidden");
    muted = true;
    bgMusic.pause();
  });

  notPlayingStatus.addEventListener("click", () => {
    playingStatus.classList.toggle("hidden");
    notPlayingStatus.classList.toggle("hidden");
    muted = false;
    bgMusic.play();
  });
});
