import Explosion from "./explosion";
import GameCanvas from "./game_canvas";
import TieFighter from "./tie_fighter";
import Upgrade from "./upgrade";
import XFighter from "./x_fighter";
import Sounds from "./sounds";

class Game extends GameCanvas {
  constructor(images, sounds) {
    super();
    this.images = images;
    this.sounds = sounds;
    this.player = new XFighter(images.playerImg);

    this.reset();
    this.bindStuff();
    document.addEventListener("keydown", this.keyDownHandler, false);
    this.draw();
  }

  bindStuff() {
    this.draw = this.draw.bind(this);
    this.checkFPS = this.checkFPS.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  reset() {
    this.score = 0;
    this.wave = 0;
    this.waveCount = 0;
    this.lastWave = 30;

    this.lost = false;
    this.paused = false;
    this.won = false;

    this.enemies = [];
    this.enemyLasers = [];
    this.explosions = [];
    this.upgrades = [];

    this.setFPS();
  }

  setFPS() {
    this.now = 0;
    this.elapsed = 0;
    this.then = Date.now();
    this.fpsInterval = 1;
  }

  checkFPS() {
    this.now = Date.now();
    this.elapsed = this.now - this.then;
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
      this.images.background.forEach(layer => layer.draw());
    }
  }

  draw() {
    let { sounds } = this;
    if (this.waveCount >= 30) {
      this.drawWin();
    }
    if (!this.paused && !this.lost && !this.won) {
      let {
        canvas,
        context,
        player,
        enemies,
        enemyLasers,
        checkCollision,
        explosions,
        upgrades,
        images,
        sounds,
        checkFPS
      } = this;
      context.clearRect(0, 0, canvas.width, canvas.height);
      checkFPS();

      if (player.hp > 0) {
        player.draw();
      } else {
        this.drawLose();
        this.lost = true;
      }

      this.drawUI();

      player.projectiles.forEach((projectile, i) => {
        if (projectile && projectile.posY >= -5) {
          let alreadyDrawn = false;
          enemies.forEach((enemy, j) => {
            if (enemy) {
              if (checkCollision(projectile, enemy)) {
                if (!sounds.muted) sounds.impact.play();
                enemy.hp -= 1;
                projectile.hp -= 1;
                if (projectile.hp <= 0) {
                  player.projectiles[i] = null;
                }
                if (enemy.hp <= 0) {
                  let explosion = null;
                  switch (enemy.name) {
                    case "TieFighter":
                      explosion = new Explosion(
                        enemy.loot,
                        {
                          posX: enemy.posX,
                          posY: enemy.posY,
                          velocityY: 1
                        },
                        images.explosionImg
                      );
                      if (!sounds.muted) {
                        sounds.tieExplodeSound.currentTime = 0;
                        sounds.tieExplodeSound.play();
                      }
                      explosions.push(explosion);
                      this.score += 1;
                      break;
                    default:
                      break;
                  }
                  enemies[j] = null;
                }
              } else if (!alreadyDrawn) {
                projectile.posY += projectile.velocityY;
                projectile.draw();
                alreadyDrawn = true;
              }
            }
          });
        } else {
          player.projectiles[i] = null;
        }
      });

      enemies.forEach((enemy, idx) => {
        if (enemy) {
          if (enemy.posY >= 850) {
            enemies[idx] = null;
          } else {
            enemy.draw();
            let randomNumber = Math.ceil(Math.random() * 1000);
            if (randomNumber === 1) {
              enemy.fireWeapon();
              enemyLasers.push(enemy.projectiles[enemy.projectiles.length - 1]);
            }
          }
        }
      });

      enemyLasers.forEach(projectile => {
        if (checkCollision(projectile, player)) {
          enemyLasers.splice(enemyLasers.indexOf(projectile), 1);
          player.hp -= 10;
          let explosion = new Explosion(
            null,
            {
              posX: projectile.posX - 20,
              posY: projectile.posY - 10,
              velocityY: 1
            },
            images.explosionImg
          );
          if (!sounds.muted) {
            sounds.tieExplodeSound.currentTime = 0;
            sounds.tieExplodeSound.play();
          }
          this.explosions.push(explosion);
        } else if (projectile.posY < 850) {
          projectile.draw();
          projectile.posY += projectile.velocityY;
        } else {
          enemyLasers.splice(enemyLasers.indexOf(projectile), 1);
        }
      });

      explosions.forEach(explosion => {
        if (explosion.hp > 0) {
          explosion.draw();
          if (explosion.sX <= 3584) {
            explosion.sX += 512;
          } else {
            explosion.sX = 0;
          }
          if (explosion.sY <= 3584) {
            explosion.sY += 512;
          } else {
            explosion.sY = 0;
          }
          explosion.hp -= 1;
        } else if (explosion.hp <= 0) {
          if (explosion.loot) {
            let upgrade = new Upgrade(images.upgradeImg, this.loot, {
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
          player.upgrade();
          upgrades.splice(upgrades.indexOf(upgrade), 1);
        } else if (upgrade && upgrade.posY < 850) {
          upgrade.drawUpgrade();
        } else {
          upgrades.splice(upgrades.indexOf(upgrade), 1);
        }
      });

      if (enemies.length === 0 || enemies.every(el => el === null)) {
        let speed = 3;
        switch (this.wave) {
          case this.waveCount >= 10 && this.waveCount < 20:
            speed = 5;
            break;
          case this.waveCount >= 20 && this.waveCount < 29:
            speed = 6;
            break;
          case this.waveCount >= 29:
            speed = 20;
            this.wave += 20;
            break;
          case this.wave > 50:
            speed = 10;
            break;
          default:
            break;
        }
        this.wave += 5;
        this.waveCount += 1;
        this.enemies = [...Array(this.wave).keys()].map(
          () =>
            new TieFighter(images.tieFighterImg, sounds, {
              velocityY: Math.ceil(Math.random() * speed)
            })
        );
      }
    } else if (!this.lost && !this.won) {
      this.drawPause();
      if (sounds.muted) {
        this.drawMuted();
      } else {
        this.context.clearRect(300, -100, 550, 150);
      }
    } else if (!this.lost && this.won) {
      this.drawWin();
      if (sounds.muted) {
        this.drawMuted();
      } else {
        this.context.clearRect(300, -100, 550, 150);
      }
    } else {
      this.drawLose();
      if (sounds.muted) {
        this.drawMuted();
      } else {
        this.context.clearRect(300, -100, 550, 150);
      }
    }
    if (this.sounds.muted && !this.paused) {
      this.drawMuted();
    }
    requestAnimationFrame(this.draw);
  }

  drawUI() {
    this.drawCoolDownConstant();
    this.drawHP();
    this.drawScore();
    this.drawWavesLeft();
  }

  checkCollision(object1, object2) {
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

  keyDownHandler(e) {
    let { sounds, playingStatus, notPlayingStatus } = this;
    e.preventDefault();
    if (e.key == "r" || e.key == "R") {
      this.player = new XFighter(this.images.playerImg);
      this.reset();
    } else if (e.key == "p" || e.key == "P") {
      this.paused = !this.paused;
    } else if (e.key == "m" || e.key == "M") {
      if (sounds.muted) {
        playingStatus.classList.toggle("hidden");
        notPlayingStatus.classList.toggle("hidden");
        sounds.backgroundMusic.play();
        this.sounds.muted = false;
      } else {
        notPlayingStatus.classList.toggle("hidden");
        playingStatus.classList.toggle("hidden");
        sounds.backgroundMusic.pause();
        this.sounds.muted = true;
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

  drawCoolDownConstant() {
    let { context } = this;
    context.font = "bold 20px Arial";
    context.fillStyle = "white";
    context.fillText(
      "Laser Cooldown: " + this.player.projectileCoolDownConstant,
      10,
      60
    );
  }

  drawWavesLeft() {
    let { context } = this;
    context.font = "bold 20px Arial";
    context.fillStyle = "white";
    context.fillText(
      "Waves Remaining: " + (this.lastWave - this.waveCount),
      10,
      80
    );
  }

  drawScore() {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "white";
    context.fillText("Score: " + this.score, 130, 30);
  }

  drawWin() {
    let { context } = this;
    this.won = true;
    context.font = "bold 80px Arial";
    context.fillStyle = "green";
    context.fillText("YOU WIN!", 230, 280);
    context.font = "bold 30px Arial";
    context.fillText("THE FORCE IS STRONG WITHIN YOU", 150, 330);
    context.font = "bold 50px Arial";
    context.fillText("Your final score is: " + this.score, 155, 410);
    context.font = "bold 50px Arial";
    context.fillText("PRESS R TO RESTART", 150, 470);
  }

  drawLose() {
    let { context } = this;
    context.font = "bold 130px Arial";
    context.fillStyle = "red";
    context.fillText("GAME OVER", 10, 250);
    context.font = "bold 50px Arial";
    context.fillText("Your final score is: " + this.score, 150, 330);
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
