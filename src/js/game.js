import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";

class Game {
  constructor() {
    // this.canvas = document.getElementById("game-canvas");
    // this.ctx = this.canvas.getContext("2d");
    this.player = new XFighter();
    this.wave = 1;
    this.enemies = [new TieFighter({ velocityY: 2 })];
    this.draw = this.draw.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.draw();
  }

  draw() {
    const { player, enemies, checkCollision } = this;
    player.drawXFighter();
    player.projectiles.forEach(projectile => {
      if (projectile.posY >= 0 && projectile.status === "active") {
        if (enemies.length === 0) {
          projectile.posY += projectile.velocityY;
          // projectile.draw();
        }
        enemies.forEach(enemy => {
          if (checkCollision(projectile, enemy)) {
            projectile.status = "inactive";
            enemy.hp -= 1;
            if (enemy.hp <= 0) {
              enemies.splice(enemies.indexOf(enemy), 1);
            }
          } else {
            projectile.posY += projectile.velocityY;
            projectile.draw();
          }
        });
      } else {
        projectile.status = "inactive";
        player.projectiles.splice(player.projectiles.indexOf(projectile), 1);
      }
    });
    enemies.forEach(enemy => enemy.drawTieFighter());
    if (enemies.every(enemy => enemy.posY >= 578) || enemies.length === 0) {
      this.wave += 5;
      this.enemies = [...Array(this.wave).keys()].map(
        () => new TieFighter({ velocityY: 2 })
      );
    }
    requestAnimationFrame(this.draw);
  }

  checkCollision(object1, object2) {
    if (!object1 || !object2) {
      return false;
    } else if (
      object1.posY > object2.posY + 30 ||
      object1.posY < object2.posY ||
      object1.posX < object2.posX ||
      object1.posX > object2.posX + 80
    ) {
      return false;
    } else {
      return true;
    }
  }
}

export default Game;
