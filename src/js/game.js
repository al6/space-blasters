import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";
import drawBackground from "./background";

class Game {
  constructor() {
    this.background = drawBackground();
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    this.player = new XFighter();
    this.wave = 0;
    this.score = 0;
    this.enemies = [];
    this.paused = false;
    this.lost = false;
    this.fpsInterval = 1000 / 60;
    this.stop = false;
    this.frameCount = 0;
    this.fps = 60;
    this.now = 0;
    this.then = Date.now();
    this.startTime = this.then;
    this.elapsed = 0;
    this.checkCollision = this.checkCollision.bind(this);
    this.draw = this.draw.bind(this);
    this.drawReset = this.drawReset.bind(this);
    this.impact = new Audio("./src/sounds/impact.mp3");
    this.draw();
    this.keyDownHandler = this.keyDownHandler.bind(this);
    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  draw() {
    requestAnimationFrame(this.draw);
    this.now = Date.now();
    this.elapsed = this.now - this.then;
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
      if (!this.paused && !this.lost) {
        let { background, context, player, enemies, checkCollision } = this;
        context.clearRect(0, 0, 450, 700);
        if (background[0]) {
          background.forEach(layer => layer.draw());
        }
        if (player.hp > 0) {
          player.drawXFighter();
        } else {
          this.drawLose();
          this.lost = true;
        }
        this.drawScore();
        this.drawHP();
        player.projectiles.forEach(projectile => {
          if (projectile && projectile.posY >= 0) {
            let alreadyDrawn = false;
            enemies.forEach(enemy => {
              if (checkCollision(projectile, enemy)) {
                this.impact.play();
                player.projectiles.splice(
                  player.projectiles.indexOf(projectile),
                  1
                );
                enemy.hp -= 1;
                if (enemy.hp <= 0) {
                  switch (enemy.constructor.name) {
                    case "TieFighter":
                      this.score += 1;
                      break;
                    default:
                      break;
                  }
                  enemies.splice(enemies.indexOf(enemy), 1);
                }
              } else {
                if (!alreadyDrawn) {
                  projectile.posY += projectile.velocityY;
                  projectile.draw();
                  alreadyDrawn = true;
                }
              }
            });
          } else {
            player.projectiles.splice(
              player.projectiles.indexOf(projectile),
              1
            );
          }
        });
        enemies.forEach(enemy => {
          if (enemy.posY >= 578) {
            this.player.hp -= 1;
            enemies.splice(enemies.indexOf(enemy), 1);
            console.log(enemies);
          } else {
            enemy.drawTieFighter();
          }
        });
        if (enemies.length === 0) {
          let speed = 3;
          switch (this.wave) {
            case this.wave > 20:
              speed = 5;
              break;
            case this.wave > 30:
              speed = 6;
              break;
            case this.wave > 40:
              speed = 8;
              break;
            case this.wave > 50:
              speed = 10;
              break;
            default:
              break;
          }
          this.wave += 5;
          this.enemies = [...Array(this.wave).keys()].map(
            () =>
              new TieFighter({ velocityY: Math.ceil(Math.random() * speed) })
          );
        }
      } else if (!this.lost) {
        this.drawPause();
      } else {
        this.drawLose();
      }
    }
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
      this.lost = false;
    } else if (e.key == "p" || e.key == "P") {
      this.paused = !this.paused;
    }
  }

  drawHP() {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "RED";
    context.fillText("HP: " + this.player.hp, 10, 30);
  }

  drawScore() {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "white";
    context.fillText("Score: " + this.score, 130, 30);
  }

  drawLose() {
    let { context } = this;
    context.font = "bold 130px Arial";
    context.fillStyle = "red";
    context.fillText("GAME OVER", 50, 250);
    context.font = "bold 50px Arial";
    context.fillText("PRESS R TO RESTART", 180, 300);
  }

  drawPause() {
    let { context } = this;
    context.font = "100px Arial";
    context.fillStyle = "green";
    context.fillText("PAUSED", 250, 320);
  }

  drawReset() {
    let { context } = this;
    context.font = "100px Arial";
    context.fillStyle = "red";
    context.fillText("RESET", 250, 320);
  }
}

export default Game;
