class UI {
  constructor(game) {
    this.game = game;
    this.canvas = document.getElementById("ui-canvas");
    this.context = this.canvas.getContext("2d");
    this.playingStatus = document.getElementById("sound");
    this.notPlayingStatus = document.getElementById("no-sound");
    this.backgroundButton = document.getElementById("toggle-background-button");
    this.instructionsOpenButton = document.getElementById(
      "instructions-modal-open-button"
    );
    this.instructionsModalBackground = document.getElementById(
      "instructions-modal-background"
    );
    this.instructionsModalContent = document.getElementById(
      "instructions-modal-content"
    );
    this.setInstructionsModal();
    this.setToggleBackgroundOnClick();
    this.setToggleSoundOnClick();
  }

  draw(game) {
    this.drawCoolDownConstant(game.player.projectileCoolDownConstant);
    this.drawHP(game.player.hp);
    this.drawScore(game.score);
    this.drawWavesLeft(game.lastWave, game.waveCount);
    this.drawFPS(game.fps);
  }

  drawMuted() {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "red";
    context.fillText("MUTED! PRESS M TO UNMUTE", 388, 30);
  }

  drawHP(hp) {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "red";
    context.fillText("HP: " + hp, 10, 30);
  }

  drawCoolDownConstant(projectileCoolDownConstant) {
    let { context } = this;
    context.font = "bold 20px Arial";
    context.fillStyle = "white";
    context.fillText("Laser Cooldown: " + projectileCoolDownConstant, 10, 60);
  }

  drawWavesLeft(lastWave, waveCount) {
    let { context } = this;
    context.font = "bold 20px Arial";
    context.fillStyle = "white";
    context.fillText("Waves Remaining: " + (lastWave - waveCount), 10, 80);
  }

  drawFPS(fps) {
    let { context } = this;
    context.font = "bold 20px Arial";
    context.fillStyle = "white";
    context.fillText("FPS: " + fps, 10, 100);
  }

  drawScore(score) {
    let { context } = this;
    context.font = "bold 30px Arial";
    context.fillStyle = "white";
    context.fillText("Score: " + score, 130, 30);
  }

  drawWin(score) {
    let { context } = this;
    context.font = "bold 80px Arial";
    context.fillStyle = "green";
    context.fillText("YOU WIN!", 230, 280);
    context.font = "bold 30px Arial";
    context.fillText("THE FORCE IS STRONG WITHIN YOU", 150, 330);
    context.font = "bold 50px Arial";
    context.fillText("Your final score is: " + score, 155, 410);
    context.font = "bold 50px Arial";
    context.fillText("PRESS R TO RESTART", 150, 470);
  }

  drawLose(score) {
    let { context } = this;
    context.font = "bold 130px Arial";
    context.fillStyle = "red";
    context.fillText("GAME OVER", 10, 250);
    context.font = "bold 50px Arial";
    context.fillText("Your final score is: " + score, 150, 330);
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

  setToggleBackgroundOnClick() {
    let { game, backgroundButton } = this;
    backgroundButton.addEventListener("click", () => {
      game.toggleBackground();
    });
  }

  setToggleSoundOnClick() {
    let { playingStatus, notPlayingStatus } = this;
    playingStatus.addEventListener("click", () => {
      playingStatus.classList.toggle("hidden");
      notPlayingStatus.classList.toggle("hidden");
      this.game.sounds.muted = true;
      this.game.sounds.backgroundMusic.pause();
    });

    notPlayingStatus.addEventListener("click", () => {
      playingStatus.classList.toggle("hidden");
      notPlayingStatus.classList.toggle("hidden");
      this.game.sounds.muted = false;
      this.game.sounds.backgroundMusic.play();
    });
  }

  setInstructionsModal() {
    let {
      game,
      instructionsModalBackground,
      instructionsOpenButton,
      instructionsModalContent
    } = this;
    instructionsModalBackground.addEventListener("click", () => {
      game.play();
      instructionsModalBackground.classList.toggle("hidden");
      instructionsModalContent.classList.toggle("hidden");
    });
    instructionsOpenButton.addEventListener("click", () => {
      game.pause();
      instructionsModalBackground.classList.toggle("hidden");
      instructionsModalContent.classList.toggle("hidden");
    });
  }
}

export default UI;
