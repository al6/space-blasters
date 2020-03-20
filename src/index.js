import "./styles/index.scss";
import Game from "./js/game";
import Images from "./js/images";
import SoundSingleton from "./js/sounds";
document.addEventListener("DOMContentLoaded", () => {
  let game, images, sounds;
  images = new Images();
  sounds = SoundSingleton.initialize();
  sounds = SoundSingleton;
  images.playerImg.onload = function() {
    let canvas = document.getElementById("game-canvas");
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    game = new Game(images, sounds);
  };

  let instructionsOpenButton = document.getElementById(
    "instructions-modal-open-button"
  );
  let instructionsModalBackground = document.getElementById(
    "instructions-modal-background"
  );
  let instructionsModalContent = document.getElementById(
    "instructions-modal-content"
  );

  instructionsModalBackground.addEventListener("click", () => {
    instructionsModalBackground.classList.toggle("hidden");
    instructionsModalContent.classList.toggle("hidden");
  });

  instructionsOpenButton.addEventListener("click", () => {
    game.paused = true;
    instructionsModalBackground.classList.toggle("hidden");
    instructionsModalContent.classList.toggle("hidden");
  });

  let playingStatus = document.getElementById("sound");
  let notPlayingStatus = document.getElementById("no-sound");

  playingStatus.addEventListener("click", () => {
    playingStatus.classList.toggle("hidden");
    notPlayingStatus.classList.toggle("hidden");
    this.sounds.muted = true;
    bgMusic.pause();
  });

  notPlayingStatus.addEventListener("click", () => {
    playingStatus.classList.toggle("hidden");
    notPlayingStatus.classList.toggle("hidden");
    this.sounds.muted = false;
    sounds.backgroundMusic.play();
  });
});
