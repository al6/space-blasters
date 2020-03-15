import PlayerWeapon from "./player_weapon";
class XFighter {
  constructor(img) {
    this.name = "player";
    this.weapon = "laser1";
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = window.playerImg;
    this.laserSound = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
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
    this.drawXFighter = this.drawXFighter.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.touchHandler = this.touchHandler.bind(this);
    this.touchEndHandler = this.touchEndHandler.bind(this);
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

  touchHandler(e) {
    if (e.touches) {
      this.spacePressed = true;
      if (e.touches[0].pageX * 2.32 < this.x) {
        this.leftPressed = true;
      } else {
        this.rightPressed = true;
      }
      if (e.touches[0].pageY * 1.45 < this.y) {
        this.upPressed = true;
      } else {
        this.downPressed = true;
      }
    }
    e.preventDefault();
  }

  touchEndHandler(e) {
    e.preventDefault();
    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    this.spacePressed = false;
  }

  drawXFighter() {
    const { canvas, ctx, x, y, height, width } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    ctx.drawImage(this.img, x, y, height, width);
  }

  fireWeapon() {
    let laser, x, y, z;
    if (this.projectileCoolDown <= 0) {
      this.projectileCoolDown += this.projectileCoolDownConstant;
      switch (this.weapon) {
        // level 1 laser light blue
        case "laser1":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 43,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          break;
        case "laser2":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser3":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 43,
            posY: this.y - 10
          });
          z = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 2 laser yellow
        case "laser4":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 43,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          break;
        case "laser5":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser6":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 43,
            posY: this.y - 10
          });
          z = new PlayerWeapon("laser2", {
            velocityY: -8,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 3 laser purple
        case "laser7":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 43,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          break;
        case "laser8":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser9":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 43,
            posY: this.y - 10
          });
          z = new PlayerWeapon("laser3", {
            velocityY: -6,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 4 laser blue
        case "laser10":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 43,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          break;
        case "laser11":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser12":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 43,
            posY: this.y - 10
          });
          z = new PlayerWeapon("laser4", {
            velocityY: -4,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          this.projectiles.push(z);
          break;
        // level 5 laser green
        case "laser13":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 43,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          break;
        case "laser14":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 90,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser15":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 43,
            posY: this.y - 10
          });
          z = new PlayerWeapon("laser5", {
            velocityY: -2,
            posX: this.x + 90,
            posY: this.y - 10
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
}
export default XFighter;
