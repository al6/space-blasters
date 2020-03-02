import PlayerWeapon from "./player_weapon";
import SFX from "./SFX";

class XFighter {
  constructor(imgSrc) {
    this.weapon = "laser";
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();
    this.img.src = `${imgSrc}`;
    this.x = this.canvas.width * 1.4;
    this.y = this.canvas.height * 3.85;
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
    if (e.key == "Right" || e.key == "ArrowRight") {
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
    if (e.code == "Space") {
      this.shootPayload();
    } else if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = true;
      if (this.x >= this.canvas.width - 3 * this.width) {
      } else {
        this.x += this.canvas.height / 20;
      }
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = true;
      if (this.x <= 0) {
      } else {
        this.x -= this.canvas.height / 20;
      }
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      this.upPressed = true;
      if (this.y <= 0) {
      } else {
        this.y -= this.canvas.height / 20;
      }
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      this.downPressed = true;
      if (this.y >= this.canvas.height - this.height + 20) {
      } else {
        this.y += this.canvas.height / 20;
      }
    }
  }

  drawXFighter() {
    const { canvas, ctx, img, x, y, height, width, projectiles } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, height, width);
    projectiles.map(projectile => {
      projectile.posY += projectile.velocityY;
      projectile.draw();
    });
    img.onload = function() {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(img, x, y, height, width);
    };
    requestAnimationFrame(this.drawXFighter);
  }

  shootPayload() {
    switch (this.weapon) {
      case "laser":
        console.log("fire laser");
        let laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
        laser.play();
        // SFX.laser.play();
        // console.log(`posY: ${this.y}`);
        let x = new PlayerWeapon("laser1", {
          velocityY: -5,
          posX: this.x + 33,
          posY: this.y - 50
        });
        this.projectiles.push(x);
        break;
      case "laser2":
        console.log("fire laser2");
      default:
        break;
    }
  }
}
export default XFighter;
