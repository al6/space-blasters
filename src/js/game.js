import XFighter from "./x_fighter";
import TieFighter from "./tie_fighter";
import Explosion from "./explosion";
import Upgrade from "./upgrade";
import drawBackground from "./background";

class Game {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.context = this.canvas.getContext("2d");
    this.playingStatus = document.getElementById("sound");
    this.notPlayingStatus = document.getElementById("no-sound");

    this.background = drawBackground();
    this.tieFighterImg = new Image();
    this.tieFighterImg.src = "./src/images/tie-advanced.png";
    this.player = new XFighter(this.playerImg);

    this.impact = new Audio("./src/sounds/impact.mp3");
    this.tieExplode = new Audio("./src/sounds/tie_explode_short.mp3");
    this.tieExplode.volume = 0.3;

    this.score = 0;
    this.wave = 0;
    this.lastWave = 30;
    this.waveCount = 0;

    this.lost = false;
    this.paused = false;
    this.won = false;

    this.draw = this.draw.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    document.addEventListener("keydown", this.keyDownHandler, false);

    this.enemies = [];
    this.enemyLasers = [];
    this.explosions = [];
    this.upgrades = [];

    this.now = 0;
    this.elapsed = 0;
    this.then = Date.now();
    this.fpsInterval = 20;
  }

  draw() {
    if (this.waveCount >= 30) {
      this.drawWin();
      this.won = true;
    }

    requestAnimationFrame(this.draw);

    this.now = Date.now();
    this.elapsed = this.now - this.then;
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);

      if (!this.paused && !this.lost && !this.won) {
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
          //failsafe if player image isn't loaded
        } else {
          this.drawLose();
          this.lost = true;
        }

        this.drawCoolDownConstant();
        this.drawHP();
        this.drawScore();
        this.drawWavesLeft();

        player.projectiles.forEach(projectile => {
          if (projectile && projectile.posY >= -5) {
            let alreadyDrawn = false;
            enemies.forEach(enemy => {
              if (checkCollision(projectile, enemy)) {
                if (!window.muted) this.impact.play();
                projectile.hp -= 1;
                if (projectile.hp <= 0) {
                  player.projectiles.splice(
                    player.projectiles.indexOf(projectile),
                    1
                  );
                }
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

        enemyLasers.forEach(projectile => {
          if (checkCollision(projectile, player)) {
            enemyLasers.splice(enemyLasers.indexOf(projectile), 1);
            player.hp -= 10;
            let explosion = new Explosion(null, {
              posX: this.player.x,
              posY: this.player.y,
              velocityY: 1
            });
            if (!window.muted) {
              this.tieExplode.play();
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
            explosion.drawExplosion();
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
                let upgradeSound = new Audio(
                  "./src/sounds/upgrade_complete.mp3"
                );
                if (!window.muted) upgradeSound.play();
                break;
              case "laser2":
                player.weapon = "laser3";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser3":
                player.weapon = "laser4";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser4":
                player.weapon = "laser5";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser5":
                player.weapon = "laser6";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser6":
                player.weapon = "laser7";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser7":
                player.weapon = "laser8";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser8":
                player.weapon = "laser9";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser9":
                player.weapon = "laser10";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser10":
                player.weapon = "laser11";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser11":
                player.weapon = "laser12";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser12":
                player.weapon = "laser13";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser13":
                player.weapon = "laser14";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser14":
                player.weapon = "laser15";
                upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");
                if (!window.muted) upgradeSound.play();
                break;
              case "laser15":
                player.weapon = "laser15";
                if (player.hp === 100) {
                  if (player.projectileCoolDownConstant >= 5) {
                    player.projectileCoolDownConstant -= 1;
                    upgradeSound = new Audio(
                      "./src/sounds/upgrade_complete.mp3"
                    );
                    if (!window.muted) upgradeSound.play();
                  }
                } else if (player.hp <= 99) {
                  player.hp += 2;
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
          this.wave += 2;
          this.waveCount += 1;
          this.enemies = [...Array(this.wave).keys()].map(
            () =>
              new TieFighter(this.tieFighterImg, {
                velocityY: Math.ceil(Math.random() * speed)
              })
          );
        }
      } else if (!this.lost && !this.won) {
        this.drawPause();
        if (window.muted) {
          this.drawMuted();
        } else {
          this.context.clearRect(300, -100, 550, 150);
        }
      } else if (!this.lost && this.won) {
        this.drawWin();
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
    e.preventDefault();
    if (e.key == "r" || e.key == "R") {
      this.player = new XFighter();

      this.wave = 0;
      this.waveCount = 0;
      this.score = 0;

      this.enemies = [];
      this.explosions = [];
      this.enemyLasers = [];
      this.upgrades = [];

      this.lost = false;
      this.paused = false;
      this.won = false;
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
