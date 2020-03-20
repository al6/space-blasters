[Live Site](https://al6.github.io/space-blasters "Space Blasters")

# Space Blasters

![Later version of game](https://media.giphy.com/media/SVTSbxSx6Ce09CT9Jl/giphy.gif)

## Background and Overview

Space Blasters is a Star Wars inspired space shooter game. Navigate a spaceship and defeat the enemies!

## Features and Implementations

### Player shooting lasers

Instantiate and push laser object into self contained array

```javascript
fireWeapon() {
    let laser, x;
    if (this.projectileCoolDown <= 0) {
      this.projectileCoolDown += this.projectileCoolDownConstant;
      switch (this.weapon) {
        // level 1 laser light blue
        case "laser1":
          laser = new Audio("./src/sounds/Digital_SFX_Set/laser1.mp3");
          if (!window.muted) laser.play();
          x = new PlayerWeapon("laser1", {
            velocityY: -10,
            posX: this.x + 43,
            posY: this.y - 1
          });
          this.projectiles.push(x)
      }}}
```

### Explosion animation

Iterate over one sprite-sheet PNG file and draw exact frames of the explosion

```javascript
class Explosion extends MovingObject{
  constructor(...){
    ...
    this.hp = 64;
    this.sX = 0;
    this.sY = 0;
    this.sWidth = 512;
    this.sHeight = 512;
    this.height = 50;
    this.width = 80;
    this.scale = 5;
  }
  draw(){
    if (this.hp > 0) {
      ctx.drawImage(
        img,
        sX,
        sY,
        sWidth,
        sHeight,
        posX - 170,
        posY - 100,
        width * scale,
        height * scale
      );
    }
  }
}
```

### Infinite particle background

The infinite background with individual particles for stars/rocks/etc. was achieved with 8 layered canvas elements moving at different velocities and optimized to maximize game-play FPS.

Drawing the layers

```javascript
class BackgroundLayer extends MovingObject {
  ...
  draw() {
    ...
    this.posY += velocityY;
    ctx.drawImage(img, 0, -700 + posY);
    ctx.drawImage(img, 0, posY);
    if (posY >= canvas.height) {
      this.posY = 0;
    }
    ...
  }
}

function drawLayer(i) {
  ...
  switch (i) {
    case 0: // main background
      v["velocityY"] = 0.1;
      break;
  ...
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
```

Optimize background canvas layers by reducing unnecessary computational load to maximize game-play FPS

```javascript
class Game {
  constructor() {
    ...
    this.now = 0;
    this.elapsed = 0;
    this.then = Date.now();
    this.fpsInterval = 500;
  }
  draw() {
    ...
    this.now = Date.now();
      this.elapsed = this.now - this.then;
      if (this.elapsed > this.fpsInterval) {
        this.then = this.now - (this.elapsed % this.fpsInterval);
        background.forEach(layer => layer.draw());
      }
    requestAnimationFrame(this.draw);
  }
}
```

## Functionality and MVPs

In Space Blasters, players will be able to:

- Shoot lasers
- Navigate a spaceship
- Enjoy the space inspired scenery with several layered canvas elements
- Destroy enemy spaceships
- See their own HP
- Upgrade laser upon picking up upgrade item

## Wireframes

![Early version of game](https://media.giphy.com/media/gLcA8yS00O1c3JViU3/giphy.gif)

## Architecture and Technologies

This project was written in HTML and JavaScript with no outside libraries.

## Implementation Timeline

- 3/2 Shoot lasers
- 3/3 Destroy enemy spaceships
- 3/4 See own HP
- 3/5 Upgrade laser upon picking up item

## Bonus Features

- 3D rotation of sprite when moving
- More differentiated enemies
- User driven settings for background/spaceship velocities
