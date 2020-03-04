import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";
import drawBackground from "./background";

class Game {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    this.player = new XFighter();
    this.wave = 1;
    this.enemies = [];
    this.draw = this.draw.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.background = drawBackground();
    this.draw();
  }

  draw() {
    let { background, context, player, enemies, checkCollision } = this;
    context.clearRect(0, 0, 450, 700);
    if (background[0]) {
      background.forEach(layer => layer.draw());
    }
    player.drawXFighter();
    player.projectiles.forEach(projectile => {
      if (projectile && projectile.posY >= 0) {
        let flag = false;
        enemies.forEach(enemy => {
          if (checkCollision(projectile, enemy)) {
            player.projectiles.splice(
              player.projectiles.indexOf(projectile),
              1
            );
            enemy.hp -= 1;
            if (enemy.hp <= 0) {
              enemies.splice(enemies.indexOf(enemy), 1);
            }
          } else {
            if (!flag) {
              projectile.posY += projectile.velocityY;
              flag = true;
              debugger
              projectile.draw();
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
}

export default Game;
