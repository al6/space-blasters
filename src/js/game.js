import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";
import Explosion from "./explosion";
import Upgrade from "./upgrade";
import drawBackground from "./background";

class Game {
  constructor() {
    this.background = drawBackground();
    this.tieFighterImg = new Image();
    this.tieFighterImg.src = "./src/images/tie-advanced.png";
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    this.player = new XFighter(this.playerImg);
    this.wave = 0;
    this.score = 0;
    this.enemies = [];
    this.paused = false;
    this.lost = false;
    this.fpsInterval = 1000 / 120;
    this.stop = false;
    this.frameCount = 0;
    this.fps = 60;
    this.now = 0;
    this.then = Date.now();
    this.startTime = this.then;
    this.elapsed = 0;
    this.playingStatus = document.getElementById("sound");
    this.notPlayingStatus = document.getElementById("no-sound");
    this.checkCollision = this.checkCollision.bind(this);
    this.draw = this.draw.bind(this);
    this.drawReset = this.drawReset.bind(this);
    this.impact = new Audio("./src/sounds/impact.mp3");
    this.tieExplode = new Audio("./src/sounds/tie_explode_short.mp3");
    this.keyDownHandler = this.keyDownHandler.bind(this);
    document.addEventListener("keydown", this.keyDownHandler, false);
    this.explosions = [];
    this.enemyLasers = [];
    this.upgrades = [];
    this.draw();
  }

  draw() {
    requestAnimationFrame(this.draw);
    this.now = Date.now();
    this.elapsed = this.now - this.then;
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);

      if (!this.paused && !this.lost) {
        let {
          background,
          context,
          player,
          enemies,
          enemyLasers,
          checkCollision,
          explosions,
          upgrades
        } = this;
        context.clearRect(0, 0, 450, 700);

        if (background[0]) {
          background.forEach(layer => layer.draw());
        }
        if (player.hp > 0 && window.playerImg) {
          player.drawXFighter();
        } else if (player.hp > 0) {
        } else {
          this.drawLose();
          this.lost = true;
        }
        this.drawScore();
        this.drawHP();
        explosions.forEach(explosion => {
          if (explosion.hp > 0) {
            explosion.drawExplosion();
            explosion.hp -= 1;
          } else if (explosion.hp <= 0) {
            if (explosion.loot) {
              let upgrade = new Upgrade(this.loot, {
                posX: explosion.posX,
                posY: explosion.posY,
                velocityY: 1
              });
              upgrades.push(upgrade);
            }
            explosions.splice(explosions.indexOf(explosion), 1);
          }
        });
        upgrades.forEach(upgrade => {
          if (checkCollision(player, upgrade)) {
            switch (player.weapon) {
              case "laser1":
                player.weapon = "laser2";
                break;
              case "laser2":
                player.weapon = "laser3";
              case "laser3":
                if (player.hp === 100) {
                  if (player.projectileCoolDownConstant >= 5) {
                    player.projectileCoolDownConstant -= 1;
                  }
                } else if (player.hp <= 99) {
                  player.hp += 1;
                } else {
                  this.score += 5;
                }
                break;
              default:
                break;
            }
            upgrades.splice(upgrades.indexOf(upgrade), 1);
          } else if (upgrade && upgrade.posY < 850) {
            upgrade.drawUpgrade();
          } else {
            upgrades.splice(upgrades.indexOf(upgrade), 1);
          }
        });
        player.projectiles.forEach(projectile => {
          if (projectile && projectile.posY >= -5) {
            let alreadyDrawn = false;
            enemies.forEach(enemy => {
              if (checkCollision(projectile, enemy)) {
                if (!window.muted) this.impact.play();
                player.projectiles.splice(
                  player.projectiles.indexOf(projectile),
                  1
                );
                enemy.hp -= 1;
                if (enemy.hp <= 0) {
                  let explosion = null;
                  switch (enemy.name) {
                    case "TieFighter":
                      explosion = new Explosion(enemy.loot, {
                        posX: enemy.posX,
                        posY: enemy.posY,
                        velocityY: 1
                      });

                      if (!window.muted) {
                        let tieExplodeSound = new Audio(
                          "./src/sounds/tie_explode_short.mp3"
                        );
                        tieExplodeSound.play();
                      }
                      explosions.push(explosion);
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
        enemyLasers.forEach(projectile => {
          if (checkCollision(projectile, player)) {
            enemyLasers.splice(enemyLasers.indexOf(projectile), 1);
            player.hp -= 100;
          } else if (projectile.posY < 850) {
            projectile.draw();
            projectile.posY += projectile.velocityY;
          } else {
            enemyLasers.splice(enemyLasers.indexOf(projectile), 1);
          }
        });
        enemies.forEach(enemy => {
          if (enemy.posY >= 850) {
            this.player.hp -= 1;
            enemies.splice(enemies.indexOf(enemy), 1);
          } else {
            enemy.drawTieFighter();
            let randomNumber = Math.ceil(Math.random() * 1000);
            if (randomNumber === 1) {
              enemy.fireWeapon();
              enemyLasers.push(enemy.projectiles[enemy.projectiles.length - 1]);
            }
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
          this.wave += 20;
          this.enemies = [...Array(this.wave).keys()].map(
            () =>
              new TieFighter(this.tieFighterImg, {
                velocityY: Math.ceil(Math.random() * speed)
              })
          );
        }
      } else if (!this.lost) {
        this.drawPause();
        if (window.muted) {
          this.drawMuted();
        } else {
          this.context.clearRect(300, -100, 550, 150);
        }
      } else {
        this.drawLose();
        if (window.muted) {
          this.drawMuted();
        } else {
          this.context.clearRect(300, -100, 550, 150);
        }
      }
      if (window.muted && !this.paused) {
        this.drawMuted();
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

      case "laser2":
        debugger;
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

  keyDownHandler(e) {
    e.preventDefault();
    if (e.key == "r" || e.key == "R") {
      this.player = new XFighter();
      this.wave = 1;
      this.score = 0;
      this.enemies = [];
      this.explosions = [];
      this.enemyLasers = [];
      this.upgrades = [];
      this.lost = false;
    } else if (e.key == "p" || e.key == "P") {
      this.paused = !this.paused;
    } else if (e.key == "m" || e.key == "M") {
      if (window.muted) {
        this.playingStatus.classList.toggle("hidden");
        this.notPlayingStatus.classList.toggle("hidden");
        window.muted = false;
        window.bgMusic.play();
      } else {
        this.notPlayingStatus.classList.toggle("hidden");
        this.playingStatus.classList.toggle("hidden");
        window.muted = true;
        window.bgMusic.pause();
      }
    }
  }

  drawMuted() {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "red";
    context.fillText("MUTED! PRESS M TO UNMUTE", 388, 30);
  }

  drawHP() {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "red";
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
    context.fillText("GAME OVER", 10, 250);
    context.font = "bold 50px Arial";
    context.fillText("PRESS R TO RESTART", 150, 400);
  }

  drawPause() {
    let { context } = this;
    context.font = "100px Arial";
    context.fillStyle = "green";
    context.fillText("PAUSED", 250, 370);
    context.font = "bold 50px Arial";
    context.fillText("PRESS P TO PLAY/PAUSE", 110, 420);
  }

  drawReset() {
    let { context } = this;
    context.font = "100px Arial";
    context.fillStyle = "red";
    context.fillText("RESET", 250, 320);
  }
}

export default Game;
