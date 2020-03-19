import "./styles/index.scss";
import Game from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  window.muted = true;
  window.bgMusic = new Audio("./src/sounds/sw.mp3");
  window.bgMusic.volume = 0.1;
  bgMusic.loop = true;
  let game;
  window.playerImg = new Image();
  window.playerImg.src = "./src/images/xwing.png";
  window.playerImg.onload = function() {
    let canvas = document.getElementById("game-canvas");
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    game = new Game();
  };

  let instructionsOpenButton = document.getElementById(
    "instructions-modal-open-button"
  );
  let instructionsModalBackground = document.getElementById(
    "instructions-modal-background"
  );
  let instructionsModalContent = document.getElementById(
    "instructions-modal-content"
  );

  instructionsModalBackground.addEventListener("click", () => {
    instructionsModalBackground.classList.toggle("hidden");
    instructionsModalContent.classList.toggle("hidden");
  });

  instructionsOpenButton.addEventListener("click", () => {
    game.paused = true;
    instructionsModalBackground.classList.toggle("hidden");
    instructionsModalContent.classList.toggle("hidden");
  });

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
