import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";
import drawBackground from "./background";

class Game {
  constructor() {
    this.background = drawBackground();
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    this.player = new XFighter();
    this.wave = 1;
    this.score = 0;
    this.enemies = [];
    this.paused = false;
    this.checkCollision = this.checkCollision.bind(this);
    this.draw = this.draw.bind(this);
    this.draw();
    this.keyDownHandler = this.keyDownHandler.bind(this);
    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  draw() {
    if (!this.paused) {
      let { background, context, player, enemies, checkCollision } = this;
      context.clearRect(0, 0, 450, 700);
      if (background[0]) {
        background.forEach(layer => layer.draw());
      }
      player.drawXFighter();
      player.projectiles.forEach(projectile => {
        if (projectile && projectile.posY >= 0) {
          let already_drawn = false;
          enemies.forEach(enemy => {
            if (checkCollision(projectile, enemy)) {
              player.projectiles.splice(
                player.projectiles.indexOf(projectile),
                1
              );
              enemy.hp -= 1;
              if (enemy.hp <= 0) {
                switch (enemy.constructor.name) {
                  case "TieFighter":
                    this.score += 100;
                    break;
                  default:
                    break;
                }
                enemies.splice(enemies.indexOf(enemy), 1);
              }
            } else {
              if (!already_drawn) {
                projectile.posY += projectile.velocityY;
                projectile.draw();
                already_drawn = true;
              }
            }
          });
        } else {
          player.projectiles.splice(player.projectiles.indexOf(projectile), 1);
        }
      });
      enemies.forEach(enemy => enemy.drawTieFighter());
      if (enemies.every(enemy => enemy.posY >= 578) || enemies.length === 0) {
        enemies = [];
        this.wave += 5;
        this.enemies = [...Array(this.wave).keys()].map(
          () => new TieFighter({ velocityY: 2 })
        );
      }
    }
    // console.log(player.hp)

    requestAnimationFrame(this.draw);
  }

  checkCollision(object1, object2) {
    switch (object1.name) {
      case "laser1":
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
    }
  }

  keyDownHandler(e) {
    e.preventDefault();
    if (e.key == "r" || e.key == "R") {
      this.player = new XFighter();
      this.wave = 1;
      this.score = 0;
      this.enemies = [];
    } else if (e.key == "p" || e.key == "P") {
      this.paused = !this.paused;
      console.log(this.paused);
    }
  }
}

export default Game;
