import BackgroundLayer from "./background_layer";
const src = "./src/images/background_layers/";

function drawLayer(i) {
  let v = { velocityY: 0 };
  switch (i) {
    case 0:
      v["velocityY"] = 1;
      break;
    case 1: // diverse small stars and 2 tiny planets
      v["velocityY"] = 2;
      break;
    case 2: // white clouds
      v["velocityY"] = 2;
      break;
    case 3: // tiny white stars
      v["velocityY"] = -1;
      break;
    case 4: // small stars and 2 small moons
      v["velocityY"] = -2;
      break;
    case 5: // big moon
      v["velocityY"] = 1;
      break;
    case 6: // tiny rocks
      v["velocityY"] = 1;
      break;
    case 7: // slightly bigger rocks
      v["velocityY"] = -2;
      break;
  }
  new BackgroundLayer(
    document.getElementById("l" + i),
    src + i + ".png",
    v
  ).draw();
}

function drawBackground() {
  let layers = [];
  for (let i = 0; i < 8; i++) {
    layers.push(i);
  }
  layers.forEach(i => drawLayer(i));
}

export default drawBackground;
