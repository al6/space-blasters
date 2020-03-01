import "./styles/index.scss";
import drawBackground from "./js/background.js";
import drawGame from "./js/space_blasters.js";
import XFighter, { drawXFighter } from "./js/x_fighter.js";
document.addEventListener("DOMContentLoaded", () => {
  drawBackground();
  let x = new XFighter(
    document.getElementById("game-canvas"),
    "./src/images/spaceship.png"
  );
  x.drawXFighter();
  setInterval(() => window.requestAnimationFrame(() => x.drawXFighter()), 20);
});
