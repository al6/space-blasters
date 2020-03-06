import "./styles/index.scss";
import drawBackground from "./js/background.js";
import Game from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  drawBackground();
  window.muted = true;
  window.bgMusic = new Audio("./src/sounds/sw.mp3");
  new Game();
  bgMusic.loop = true;

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
