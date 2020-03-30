# [Live Site](https://al6.github.io/space-blasters "Space Blasters")

## Space Blasters

![Later version of game](https://media.giphy.com/media/SVTSbxSx6Ce09CT9Jl/giphy.gif)

### Background and Overview

Space Blasters is a Star Wars inspired space shooter game. Navigate a spaceship and defeat the enemies!

### Features and Implementations

#### Player shooting lasers

Instantiate and push laser object into self contained array

```javascript
fireWeapon() {
    let x;
      ...
      switch (this.weapon) {
        case "laser1":
          x = new PlayerWeapon("laser1", {
            ...
          });
          this.projectiles.push(x);
          break;
          ...
      }}}
```

#### Explosion animation

Iterate over one sprite-sheet PNG file and draw exact frames of the explosion

```javascript
class Explosion extends MovingObject {
  constructor(...){
    ...
    this.sX = 0;
    this.sY = 0;
    this.sWidth = 512;
    this.sHeight = 512;
    this.height = 50;
    this.width = 80;
    ...
}
  draw(){
    ...
    ctx.drawImage(
        img,
        sX,
        sY,
        sWidth,
        sHeight,
        posX - 170,
        posY - 100,
        width,
        height
      );
    }
  }
```

#### Infinite particle background

The infinite background with individual particles for stars/rocks/etc. was achieved with 8 layered canvas elements moving at different velocities and optimized to maximize game-play FPS

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

Singleton implementation for audio files to improve background/gameplay FPS by 3000% (from 2 FPS to 60+ FPS) and to improve space complexity from O(n) to O(1)

```javascript
class Sounds {
  initialize() {
    ...
    this.audio = new Audio('src');
    ...
  }
}
export default new Sounds();
```

### Functionality and MVPs

In Space Blasters, players will be able to:

- [x] Shoot lasers
- [x] Navigate a spaceship
- [x] Enjoy the space inspired scenery with several layered canvas elements
- [x] Destroy enemy spaceships
- [x] See their own HP
- [x] Upgrade laser upon picking up upgrade item

### Wireframes

![Early wireframe of game](https://media.giphy.com/media/gLcA8yS00O1c3JViU3/giphy.gif)

### Architecture and Technologies

This project was written in HTML and JavaScript with no outside libraries.

### Implementation Timeline

- [x] 3/2 Shoot lasers
- [x] 3/3 Destroy enemy spaceships
- [x] 3/4 See own HP
- [x] 3/5 Upgrade laser upon picking up item

## Future Directions
- [ ] Refactor arrays to doubly linked lists to house instantiated moving objects to improve time complexity.
- [ ] 3D rotation of sprite when moving
- [ ] More differentiated enemies
- [ ] User driven settings for background/spaceship velocities
