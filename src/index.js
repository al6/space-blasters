import "./styles/index.scss";
import drawBackground from "./js/background.js";
import drawGame from "./js/space_blasters.js";
import XFighter, { drawXFighter } from "./js/x_fighter.js";
document.addEventListener("DOMContentLoaded", () => {
  drawBackground();
  let x = new XFighter("./src/images/ship.png");
  x.drawXFighter();
});
