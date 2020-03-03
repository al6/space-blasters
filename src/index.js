import "./styles/index.scss";
import drawBackground from "./js/background.js";
import drawGame from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  drawBackground();
  drawGame();
});
