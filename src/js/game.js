import XFighter, { drawXFighter } from "./x_fighter";

const drawGame = () => {
  let x = new XFighter("./src/images/ship.png");
  x.drawXFighter();
};

export default drawGame;
