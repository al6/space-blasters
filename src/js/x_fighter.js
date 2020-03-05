import PlayerWeapon from "./player_weapon";
class XFighter {
  constructor() {
    this.weapon = "laser2";
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
    this.spacePressed = false;
    this.upPressed = false;
    this.rightPressed = false;
    this.downPressed = false;
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
    } else if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = false;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPressed = false;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPressed = false;
    }
  }

  keyDownHandler(e) {
    e.preventDefault();
    if (e.code == "Space") {
      this.spacePressed = true;
      this.fireWeapon();
      if (this.rightPressed && this.x < this.canvas.width - 3 * this.width) {
        this.x += this.canvas.height / 20;
      } else if (this.leftPressed && this.x > 0) {
        this.x -= this.canvas.height / 20;
      } else if (this.upPressed && this.y > 0) {
        this.y -= this.canvas.height / 20;
      } else if (
        this.downPressed &&
        this.y < this.canvas.height - this.height + 20
      ) {
        this.y += this.canvas.height / 20;
      }
    } else if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = true;
      if (this.spacePressed) this.fireWeapon();
      if (this.upPressed && this.y > 0) {
        this.y -= this.canvas.height / 20;
      }
      if (this.x < this.canvas.width - 3 * this.width) {
        this.x += this.canvas.height / 20;
      }
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = true;
      if (this.spacePressed) this.fireWeapon();
      if (this.x > 0) {
        this.x -= this.canvas.height / 20;
      }
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPressed = true;
      if (this.spacePressed) this.fireWeapon();
      if (this.y > 0) {
        this.y -= this.canvas.height / 20;
      }
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPressed = true;
      if (this.spacePressed) this.fireWeapon();
      if (this.y < this.canvas.height - this.height + 20) {
        this.y += this.canvas.height / 20;
      }
    }
  }

  drawXFighter() {
    const { canvas, ctx, img, x, y, height, width } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, height, width);
    img.onload = function() {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(img, x, y, height, width);
    };
  }

  fireWeapon() {
    let laser, x, y;
    switch (this.weapon) {
      case "laser1":
        laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
        laser.play();
        x = new PlayerWeapon("laser1", {
          velocityY: -5,
          posX: this.x + 33,
          posY: this.y - 10
        });
        this.projectiles.push(x);
        break;
      case "laser2":
        laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
        laser.play();
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
      default:
        break;
    }
  }
}
export default XFighter;
