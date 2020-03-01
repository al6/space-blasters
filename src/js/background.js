import BackgroundLayer from "./background_layer";
const src = "./src/images/background_layers/";

function drawLayer(i) {
  if (i === 0) {
    new BackgroundLayer(document.getElementById("l" + i), src + i + ".png", {
      // velocityY: -5
    }).draw();
  } else {
    new BackgroundLayer(document.getElementById("l" + i), src + i + ".png", {
      velocityY: 0
    }).draw();
  }
}

function drawBackground() {
  let layers = [];
  for (let i = 0; i < 8; i++) {
    layers.push(i);
  }
  layers.forEach(i => drawLayer(i));
}

export default drawBackground;
