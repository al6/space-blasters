import "./styles/index.scss";
import drawBackground from "./js/background.js";
import Game from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  drawBackground();
  new Game();
});
