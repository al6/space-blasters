import BackgroundLayer from "./background_layer";
const src = "./src/images/background_layers/";

function drawLayer(i) {
  let v = { velocityY: 0 };
  switch (i) {
    case 0: // main background
      v["velocityY"] = .1;
      break;
    case 1: // diverse small stars and 2 tiny planets
      v["velocityY"] = .3;
      break;
    case 2: // white clouds
      v["velocityY"] = .1;
      break;
    case 3: // tiny white stars
      v["velocityY"] = 1
      break;
    case 4: // small stars and 2 small moons
      v["velocityY"] = .05;
      break;
    case 5: // big moon
      v["velocityY"] = .1;
      break;
    case 6: // tiny rocks
      v["velocityY"] = .5;
      break;
    case 7: // slightly bigger rocks
      v["velocityY"] = 1;
      break;
  }
  return new BackgroundLayer(
    document.getElementById("l" + i),
    src + i + ".png",
    v
  );
}

function drawBackground() {
  let layers = [];
  for (let i = 0; i < 8; i++) {
    layers.push(i);
  }
  return layers.map(i => drawLayer(i));
}

export default drawBackground;
