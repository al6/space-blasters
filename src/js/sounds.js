export const SOUNDS = {
  BACKGROUND_MUSIC: "BACKGROUND_MUSIC",
  IMPACT: "IMPACT",
  PLAYER_LASER: "PLAYER_LASER",
  ENEMY_LASER: "ENEMY_LASER",
  UPGRADE: "UPGRADE",
  TIE_EXPLODE: "TIE_EXPLODE"
};

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

    this.setPlayMethods();
  }

  playSound(type) {
    switch (type) {
      case SOUNDS.BACKGROUND_MUSIC:
        this.backgroundMusic.playIfNotMuted();
        break;
      case SOUNDS.IMPACT:
        this.impact.playIfNotMuted();
        break;
      case SOUNDS.PLAYER_LASER:
        this.laserSound.playIfNotMuted();
        break;
      case SOUNDS.ENEMY_LASER:
        this.enemyLaserSound.playIfNotMuted();
        break;
      case SOUNDS.UPGRADE:
        this.upgradeSound.playIfNotMuted();
        break;
      case SOUNDS.TIE_EXPLODE:
        this.tieExplodeSound.playIfNotMuted();
        break;
      default:
        break;
    }
  }

  setPlayMethods() {
    let that = this;
    this.backgroundMusic.playIfNotMuted = function() {
      if (!that.muted) {
        this.play();
      }
    };
    this.impact.playIfNotMuted = function() {
      if (!that.muted) {
        this.currentTime = 0;
        this.play();
      }
    };
    this.laserSound.playIfNotMuted = function() {
      if (!that.muted) {
        this.currentTime = 0;
        this.play();
      }
    };
    this.enemyLaserSound.playIfNotMuted = function() {
      if (!that.muted) {
        this.currentTime = 0;
        this.play();
      }
    };
    this.upgradeSound.playIfNotMuted = function() {
      if (!that.muted) {
        this.currentTime = 0;
        this.play();
      }
    };
    this.tieExplodeSound.playIfNotMuted = function() {
      if (!that.muted) {
        this.currentTime = 0;
        this.play();
      }
    };
  }
}

export default new Sounds();
