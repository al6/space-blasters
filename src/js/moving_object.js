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

  checkCollision(object) {
    let object1 = this;
    let object2 = object;
    switch (object1.name) {
      case "laser1":
      case "laser2":
      case "laser3":
      case "laser4":
      case "laser5":
        if (!object1 || !object2) {
          return false;
        } else if (
          object1.posY > object2.posY + object2.height ||
          object1.posY < object2.posY ||
          object1.posX + 10 < object2.posX ||
          object1.posX > object2.posX + object2.width
        ) {
          return false;
        } else {
          return true;
        }

      case "red-laser":
        if (!object1 || !object2) {
          return false;
        } else if (
          object1.posY > object2.y + object2.height ||
          object1.posY < object2.y ||
          object1.posX + 10 < object2.x ||
          object1.posX > object2.x + object2.width
        ) {
          return false;
        } else {
          return true;
        }

      case "player":
        if (!object1 || !object2) {
          return false;
        } else if (
          object1.y > object2.posY + object2.height ||
          object1.y + object1.height < object2.posY ||
          object1.x + object1.width < object2.posX ||
          object1.x > object2.posX + object2.width
        ) {
          return false;
        } else {
          return true;
        }
    }
  }
}

export default MovingObject;
