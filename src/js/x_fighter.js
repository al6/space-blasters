import PlayerWeapon from "./player_weapon";
import MovingObject from "./moving_object";
import Sounds from "./sounds";

class XFighter extends MovingObject {
  constructor(img) {
    super();
    this.name = "player";
    this.weapon = "laser1";
    this.img = img;
    this.sounds = Sounds;
    this.restart();
    this.setKeyAndTouchHandlers();
  }

  restart() {
    this.hp = 100;
    this.height = 100;
    this.width = 100;
    this.x = 400;
    this.y = 765;
    this.projectiles = [];
    this.projectileCoolDown = 0;
    this.projectileCoolDownConstant = 10;
    this.spacePressed = false;
    this.upPressed = false;
    this.downPressed = false;
    this.rightPressed = false;
    this.leftPressed = false;
  }

  setKeyAndTouchHandlers() {
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    // this.touchHandler = this.touchHandler.bind(this);
    // this.touchEndHandler = this.touchEndHandler.bind(this);
    document.addEventListener("keyup", this.keyUpHandler, false);
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("touchstart", this.touchHandler);
    document.addEventListener("touchend", this.touchEndHandler);
    document.addEventListener("touchmove", this.touchHandler);
  }

  keyUpHandler(e) {
    if (e.code == "Space" || e.key == "Space") {
      this.spacePressed = false;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = false;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = false;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPressed = false;
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPressed = false;
    }
  }

  keyDownHandler(e) {
    e.preventDefault();
    if (e.code == "Space") {
      this.spacePressed = true;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = true;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPressed = true;
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPressed = true;
    }
  }

  // remove mobile touch handlers for now
  // touchHandler(e) {
  // if (e.touches) {
  //   this.spacePressed = true;
  //   if (e.touches[0].pageX * 2.32 < this.x) {
  //     this.leftPressed = true;
  //   } else {
  //     this.rightPressed = true;
  //   }
  //   if (e.touches[0].pageY * 1.45 < this.y) {
  //     this.upPressed = true;
  //   } else {
  // this.downPressed = true;
  //   }
  // }
  // e.preventDefault();
  // }

  // touchEndHandler(e) {
  //   e.preventDefault();
  //   this.leftPressed = false;
  //   this.rightPressed = false;
  //   this.upPressed = false;
  //   this.downPressed = false;
  //   this.spacePressed = false;
  // }

  draw() {
    const { context, x, y, height, width } = this;
    if (this.spacePressed) {
      this.fireWeapon();
    }
    if (this.leftPressed) {
      if (this.x > 0) {
        this.x -= 15;
      } else {
        this.x = 750;
      }
    }
    if (this.rightPressed) {
      if (this.x < 700) {
        this.x += 15;
      } else {
        this.x = -50;
      }
    }
    if (this.upPressed) {
      if (this.y > 0) {
        this.y -= 10;
      }
    }
    if (this.downPressed) {
      if (this.y < 755) {
        this.y += 10;
      }
    }
    context.drawImage(this.img, x, y, height, width);
  }

  fireWeapon() {
    let x, y, z;
    if (this.projectileCoolDown <= 0) {
      this.projectileCoolDown += this.projectileCoolDownConstant;
      if (!this.sounds.muted) {
        this.sounds.laserSound.currentTime = 0;
        this.sounds.laserSound.play();
      }
      switch (this.weapon) {
        // level 1 laser light blue
        case "laser1":
          x = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 43,
            posY: this.y - 1,
          });
          this.projectiles.push(x);
          break;
        case "laser2":
          x = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser3":
          x = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          z = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 2 laser yellow
        case "laser4":
          x = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          break;
        case "laser5":
          x = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser6":
          x = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          z = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 3 laser purple
        case "laser7":
          x = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          break;
        case "laser8":
          x = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser9":
          x = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          z = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 4 laser blue
        case "laser10":
          x = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          break;
        case "laser11":
          x = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser12":
          x = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          z = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 5 laser green
        case "laser13":
          x = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          break;
        case "laser14":
          x = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser15":
          x = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x,
            posY: this.y - 10,
          });
          y = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 43,
            posY: this.y - 10,
          });
          z = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 90,
            posY: this.y - 10,
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        default:
          break;
      }
    } else {
      this.projectileCoolDown -= 1;
    }
  }

  upgrade() {
    let { weapon, hp, projectileCoolDownConstant } = this;
    if (!this.sounds.muted && weapon !== "laser15") {
      this.sounds.upgradeSound.currentTime = 0;
      this.sounds.upgradeSound.play();
    }
    switch (weapon) {
      case "laser1":
        this.weapon = "laser2";
        break;
      case "laser2":
        this.weapon = "laser3";
        break;
      case "laser3":
        this.weapon = "laser4";
        break;
      case "laser4":
        this.weapon = "laser5";
        break;
      case "laser5":
        this.weapon = "laser6";
        break;
      case "laser6":
        this.weapon = "laser7";
        break;
      case "laser7":
        this.weapon = "laser8";
        break;
      case "laser8":
        this.weapon = "laser9";
        break;
      case "laser9":
        this.weapon = "laser10";
        break;
      case "laser10":
        this.weapon = "laser11";
        break;
      case "laser11":
        this.weapon = "laser12";
        break;
      case "laser12":
        this.weapon = "laser13";
        break;
      case "laser13":
        this.weapon = "laser14";
        break;
      case "laser14":
        this.weapon = "laser15";
        break;
      case "laser15":
        if (hp === 100) {
          if (projectileCoolDownConstant >= 5) {
            this.projectileCoolDownConstant -= 1;
            if (!this.sounds.muted && weapon !== "laser15") {
              this.sounds.upgradeSound.currentTime = 0;
              this.sounds.upgradeSound.play();
            }
          }
        } else if (hp <= 90) {
          this.hp += 10;
        } else if (hp <= 100) {
          this.hp += 1;
        }
        break;
      default:
        break;
    }
  }
}
export default XFighter;
