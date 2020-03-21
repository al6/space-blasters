import Explosion from "./explosion";
import GameCanvas from "./game_canvas";
import Images from "./images";
import SoundSingleton from "./sounds";
import TieFighter from "./tie_fighter";
import UI from "./ui";
import Upgrade from "./upgrade";
import XFighter from "./x_fighter";

class Game extends GameCanvas {
  constructor() {
    super();
    this.setAssets();
    this.reset();
    this.bindStuff();
  }

  draw() {
    let {
      background,
      checkCollision,
      clear,
      enemies,
      enemyLasers,
      explosions,
      images,
      lost,
      paused,
      player,
      score,
      sounds,
      upgrades,
      waveCount,
      won,
      ui
    } = this;

    clear();
    if (!this.paused && !this.lost && !this.won) {
      background.forEach(layer => layer.draw());
      if (player.hp > 0) {
        player.draw();
      } else {
        this.lost = true;
      }

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
    }
    ui.draw(this);
    if (waveCount >= 30) this.won = true;
    if (won) ui.drawWin(score);
    if (lost) ui.drawLose(score);
    if (paused && !lost && !won) ui.drawPause();
    if (sounds.muted) ui.drawMuted();

    requestAnimationFrame(this.draw);
  }

  clear() {
    let { canvas, context, ui } = this;
    context.clearRect(0, 0, canvas.width, canvas.height);
    ui.context.clearRect(0, 0, canvas.width, canvas.height);
  }

  pause() {
    this.paused = true;
  }

  play() {
    this.paused = false;
  }

  setAssets() {
    SoundSingleton.initialize();
    this.sounds = SoundSingleton;
    this.images = new Images();
    this.background = this.images.background;
    this.ui = new UI(this);
    this.setCanvasResolution();
  }

  setCanvasResolution() {
    let that = this;
    this.images.playerImg.onload = function() {
      let { canvas } = that;
      let { naturalWidth, naturalHeight } = this;
      canvas.width = naturalWidth;
      canvas.height = naturalHeight;
      canvas = document.getElementById("ui-canvas");
      canvas.width = naturalWidth;
      canvas.height = naturalHeight;
      that.draw();
    };
  }

  bindStuff() {
    this.clear = this.clear.bind(this);
    this.draw = this.draw.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  reset() {
    this.player = new XFighter(this.images.playerImg);

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
    let { sounds, won, lost } = this;
    let { playingStatus, notPlayingStatus } = this.ui;
    e.preventDefault();
    if (e.key == "r" || e.key == "R") {
      this.player = new XFighter(this.images.playerImg);
      this.reset();
    } else if (e.key == "p" || e.key == "P") {
      if (!won && !lost) this.paused = !this.paused;
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

  toggleBackground() {
    if (this.background.length === 0) {
      this.background = this.images.background;
    } else {
      this.background = [];
    }
  }
}

export default Game;
