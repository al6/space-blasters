import GameCanvas from "./game_canvas";

class MovingObject extends GameCanvas {
  constructor(props = {}) {
    super();
    let defaults = {
      velocityX: 0,
      velocityY: 0,
      posX: 0,
      posY: 0
    };
    const settings = Object.assign({}, defaults, props);
    this.velocityX = settings.velocityX;
    this.velocityY = settings.velocityY;
    this.posX = settings.posX;
    this.posY = settings.posY;
  }
}

export default MovingObject;
