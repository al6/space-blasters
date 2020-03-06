import PlayerWeapon from "./player_weapon";
class XFighter {
  constructor() {
    this.name = "player";
    this.weapon = "laser1";
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = "./src/images/ship.png";
    this.hp = 100;
    this.x = 420;
    this.y = 577.5;
    this.height = 80;
    this.width = 30;
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
    document.addEventListener("keyup", this.keyUpHandler, false);
    document.addEventListener("keydown", this.keyDownHandler, false);
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

  drawXFighter() {
    const { canvas, ctx, img, x, y, height, width } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.spacePressed) {
      this.fireWeapon();
    }
    if (this.leftPressed) {
      if (this.x > 0) {
        this.x -= 15;
      } else {
        this.x = 850;
      }
    }
    if (this.rightPressed) {
      if (this.x < 850) {
        this.x += 15;
      } else {
        this.x = -100;
      }
    }
    if (this.upPressed) {
      if (this.y > 0) {
        this.y -= 10;
      } else {
        this.y = 578;
      }
    }
    if (this.downPressed) {
      if (this.y < 578) {
        this.y += 10;
      }
    }
    ctx.drawImage(img, x, y, height, width);
    img.onload = function() {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(img, x, y, height, width);
    };
  }

  fireWeapon() {
    let laser, x, y, z;
    if (this.projectileCoolDown <= 0) {
      this.projectileCoolDown += this.projectileCoolDownConstant;
      switch (this.weapon) {
        case "laser1":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser1", {
            velocityY: -5,
            posX: this.x + 33,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          break;
        case "laser2":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser1", {
            velocityY: -5,
            posX: this.x + 53,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser1", {
            velocityY: -5,
            posX: this.x + 13,
            posY: this.y - 10
          });
          this.projectiles.push(x);
          this.projectiles.push(y);
          break;
        case "laser3":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser1", {
            velocityY: -5,
            posX: this.x + 53,
            posY: this.y - 10
          });
          y = new PlayerWeapon("laser1", {
            velocityY: -5,
            posX: this.x + 13,
            posY: this.y - 10
          });
          z = new PlayerWeapon("laser1", {
            velocityY: -5,
            posX: this.x + 33,
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
