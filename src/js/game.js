import Explosion from "./explosion";
import GameCanvas from "./game_canvas";
import Images from "./images";
import TieFighter from "./tie_fighter";
import UI from "./ui";
import Upgrade from "./upgrade";
import XFighter from "./x_fighter";
import SoundSingleton from "./sounds";

class Game extends GameCanvas {
  constructor() {
    super();
    this.setAssets();
    this.restart();
  }

  draw = () => {
    let {
      clearGameAndUiCanvasForNextFramePainting,
      filterNulls,
      handleExplosions,
      handleEnemies,
      handleEnemyLasers,
      handlePlayerLasers,
      handleUpgrades,
      ifNotPausedAndAliveDrawPlayer,
      ifWonOrLostStopGameAndPrintScore,
      keepDrawingBackgroundLayers,
      loopAnimationFramesAtDesiredFps,
      startNextWave,
      ui,
    } = this;

    keepDrawingBackgroundLayers();
    ifWonOrLostStopGameAndPrintScore();
    clearGameAndUiCanvasForNextFramePainting();
    ifNotPausedAndAliveDrawPlayer();
    ui.draw(this);

    if (this.playing && !this.paused && !this.lost && !this.won) {
      handleEnemies();
      handlePlayerLasers();
      handleEnemyLasers();
      handleExplosions();
      handleUpgrades();
      filterNulls();
      startNextWave();
    }
    loopAnimationFramesAtDesiredFps(60);
  };

  ifWonOrLostStopGameAndPrintScore = () => {
    if (this.player.hp <= 0) this.lost = true;
    if (!this.lost && this.waveCount >= 30) this.won = true;
  };

  clearGameAndUiCanvasForNextFramePainting = () => {
    let { canvas, context, ui } = this;
    context.clearRect(0, 0, canvas.width, canvas.height);
    ui.context.clearRect(0, 0, canvas.width, canvas.height);
  };

  keepDrawingBackgroundLayers = () => {
    this.background.forEach((layer) => layer.draw());
  };

  ifNotPausedAndAliveDrawPlayer = () => {
    if (this.player.hp > 0 && !this.paused && !this.won) this.player.draw();
  };

  filterNulls = () => {
    this.player.projectiles = this.player.projectiles.filter((el) => el);
    this.enemyLasers = this.enemyLasers.filter((el) => el);
    this.enemies = this.enemies.filter((el) => el);
    this.explosions = this.explosions.filter((el) => el);
    this.upgrades = this.upgrades.filter((el) => el);
  };

  graduallyIncreaseEnemySpeed = () => {
    let { wave, waveCount } = this;
    let speed = 3;
    switch (wave) {
      case waveCount >= 10 && waveCount < 20:
        speed = 5;
        break;
      case waveCount >= 20 && waveCount < 29:
        speed = 6;
        break;
      case waveCount >= 29:
        speed = 20;
        break;
      case wave > 50:
        speed = 10;
        break;
      default:
        break;
    }
    return speed;
  };

  handleExplosions = () => {
    let { explosions, upgrades, images, loot } = this;
    explosions.forEach((explosion, idx) => {
      let { sX, sY } = explosion;
      if (explosion.hp > 0) {
        explosion.draw();
        if (sX <= 3584) {
          explosion.sX += 512;
        } else {
          explosion.sX = 0;
        }
        if (sY <= 3584) {
          explosion.sY += 512;
        } else {
          explosion.sY = 0;
        }
        explosion.hp -= 1;
      } else if (explosion.hp <= 0) {
        if (explosion.loot) {
          let upgrade = new Upgrade(images.upgradeImg, loot, {
            posX: explosion.posX,
            posY: explosion.posY,
            velocityY: 1,
          });
          upgrades.push(upgrade);
        }
        explosions[idx] = null;
      }
    });
  };

  handleEnemies = () => {
    let { enemies, enemyLasers } = this;
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
  };

  handleEnemyLasers = () => {
    let { enemyLasers, player, images, sounds, explosions } = this;
    enemyLasers.forEach((projectile, idx) => {
      if (projectile) {
        if (projectile.checkCollision(player)) {
          player.hp -= 10;
          let explosion = new Explosion(
            null,
            {
              posX: projectile.posX - 20,
              posY: projectile.posY - 10,
              velocityY: 1,
            },
            images.explosionImg
          );
          enemyLasers[idx] = null;
          sounds.tieExplodeSound.playIfNotMuted();
          explosions.push(explosion);
        } else if (projectile.posY < 850) {
          projectile.draw();
        } else {
          enemyLasers[idx] = null;
        }
      }
    });
  };

  handlePlayerLasers = () => {
    let { player, enemies, sounds, images, explosions } = this;
    player.projectiles.forEach((projectile, i) => {
      if (projectile && projectile.posY >= -5) {
        let alreadyDrawn = false;
        enemies.forEach((enemy, j) => {
          if (enemy) {
            if (projectile.checkCollision(enemy)) {
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
                        velocityY: 1,
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
              projectile.draw();
              alreadyDrawn = true;
            }
          }
        });
      } else {
        player.projectiles[i] = null;
      }
    });
  };

  handleUpgrades = () => {
    let { player, upgrades } = this;
    upgrades.forEach((upgrade, idx) => {
      if (player.checkCollision(upgrade)) {
        // upgrade player's weapon and delete the upgrade
        player.upgrade();
        upgrades[idx] = null;
      } else if (upgrade && upgrade.posY < 850) {
        // upgrade is still falling so draw it for the player to see
        upgrade.drawUpgrade();
      } else {
        // player missed upgrade and upgrade fell off the map so delete it
        upgrades[idx] = null;
      }
    });
  };

  keyDownHandler = (e) => {
    let { sounds, won, lost } = this;
    let { playingStatus, notPlayingStatus } = this.ui;
    e.preventDefault();
    if (!this.playing) {
      this.playing = true;
      this.background = this.images.background;
    }
    if (e.key == "r" || e.key == "R") {
      this.player = new XFighter(this.images.playerImg);
      this.restart();
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
    } else if (e.key == "t" || e.key == "T") {
      this.toggleBackground();
    }
  };

  pause = () => {
    this.paused = true;
  };

  play = () => {
    this.paused = false;
  };

  loopAnimationFramesAtDesiredFps = (fpsDesired) => {
    setTimeout(() => {
      requestAnimationFrame(this.draw);
    }, 1000 / fpsDesired);
  };

  restart = () => {
    this.player = new XFighter(this.images.playerImg);

    this.score = 0;
    this.wave = 0;
    this.waveCount = 0;
    this.lastWave = 30;

    this.playing = false;
    this.lost = false;
    this.paused = false;
    this.won = false;

    this.enemies = [];
    this.enemyLasers = [];
    this.explosions = [];
    this.upgrades = [];
  };

  setAssets = () => {
    SoundSingleton.initialize();
    this.sounds = SoundSingleton;
    this.images = new Images();
    this.background = this.images.background;
    this.ui = new UI(this);
    this.fps = 60;
    this.setCanvasResolution();
    this.setKeyDownHandler();
  };

  setCanvasResolution = () => {
    let that = this;
    this.images.playerImg.onload = function () {
      let { canvas } = that;
      let { naturalWidth, naturalHeight } = this;
      canvas.width = naturalWidth;
      canvas.height = naturalHeight;
      canvas = document.getElementById("ui-canvas");
      canvas.width = naturalWidth;
      canvas.height = naturalHeight;
      that.draw();
    };
  };

  setKeyDownHandler = () => {
    document.addEventListener("keydown", this.keyDownHandler, false);
  };

  startNextWave = () => {
    let { enemies, graduallyIncreaseEnemySpeed } = this;
    if (enemies.length === 0 || enemies.every((el) => el === null)) {
      let speed = graduallyIncreaseEnemySpeed();
      this.wave += 5;
      this.waveCount += 1;
      this.enemies = [...Array(this.wave).keys()].map(
        () =>
          new TieFighter(this.images.tieFighterImg, {
            velocityY: Math.ceil(Math.random() * speed),
          })
      );
    }
  };

  toggleBackground = () => {
    if (this.background.length === 0) {
      this.background = this.images.background;
    } else {
      this.background = [];
    }
  };
}

export default Game;
