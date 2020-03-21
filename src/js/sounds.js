class Sounds {
  initialize() {
    this.muted = true;
    this.backgroundMusic = new Audio("./src/sounds/sw.mp3");
    this.backgroundMusic.volume = 0.1;
    this.backgroundMusic.loop = true;

    this.impact = new Audio("./src/sounds/impact.mp3");
    this.impact.volume = 0.5;

    this.laserSound = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
    this.enemyLaserSound = new Audio("./src/sounds/tie_fire_laser.mp3");
    this.upgradeSound = new Audio("./src/sounds/upgrade_complete.mp3");

    this.tieExplodeSound = new Audio("./src/sounds/tie_explode_short.mp3");
    this.tieExplodeSound.volume = 0.2;
  }
}

export default new Sounds();
