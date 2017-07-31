import Sprite from './sprite';

class RefMario{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 0, 0, 50, 75);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.spriteAnimations = {
      idle : {
        frames: [new Sprite(img, 0, 0, 50, 75), new Sprite(img, 50, 0, 50, 75)],
        currentFrame: 0
      }
    }

    this.states = {
      idle: {
        animation: (data) => {
          if (data.animationFrame % 50 === 0) {
            this.sprite = this.spriteAnimations.idle.frames[this.spriteAnimations.idle.currentFrame];
            this.spriteAnimations.idle.currentFrame++;
            if (this.spriteAnimations.idle.currentFrame >= 2) {
                this.spriteAnimations.idle.currentFrame = 0;
            }
          }
        }
      }
    }

    this.currentState = this.states.idle;
  }


}

export default RefMario;
