import Sprite from './sprite';

class GlassJoe{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 19, 26, 80, 220);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.spriteAnimations = {
      idle : {
        frames: [new Sprite(img, 19, 26, 80, 220), new Sprite(img, 109, 26, 80, 220),
                 new Sprite(img, 199, 26, 80, 220)],
        currentFrame: 0
      }
    }

    this.states = {
      idle: {
        animation: (data) => {
          if (data.animationFrame % 13 === 0) {
            this.sprite = (this.spriteAnimations.idle.frames.reverse())[this.spriteAnimations.idle.currentFrame];
            this.spriteAnimations.idle.currentFrame++;
            if (this.spriteAnimations.idle.currentFrame >= 3) {
                this.spriteAnimations.idle.currentFrame = 0;
            }
          }
        }
      }
    }

    this.currentState = this.states.idle;
  }


}

export default GlassJoe;
