const defaults = {
  velocityX: 0,
  velocityY: 0,
  posX: 0,
  posY: 0
};

export default class MovingObject {
  constructor(props = {}) {
    const settings = Object.assign({}, defaults, props);
    this.velocityX = settings.velocityX;
    this.velocityY = settings.velocityY;
    this.posX = settings.posX;
    this.posY = settings.posY;
  }

  move() {
    this.posX += this.velocityX;
    this.posY += this.velocityY;
  }
}
