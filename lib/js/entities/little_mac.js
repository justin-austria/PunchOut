import Sprite from './sprite';

class LittleMac{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 28, 10, 67, 161);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.spriteAnimations = {
      idle : {
        frames: [new Sprite(img, 28, 10, 67, 161), new Sprite(img, 98, 10, 67, 161)],
        currentFrame: 0
      },

      leftJab: {
        frames: [new Sprite(img, 30, 480, 67, 161), new Sprite(img, 100, 480, 67, 161),
                 new Sprite(img, 170, 480, 67, 161)],
        currentFrame: 0
      },

      rightJab: {
        frames: [],
        currentFrame: 0
      },

      leftDodge: {
        frames: [],
        currentFrame: 0
      },

      rightDodge: {
        frames: [],
        currentFrame: 0
      }
    }

    this.states = {
      idle: {
        animation: (data) => {
          if (data.entityFrame.littleMac % 39 === 0) {
            this.sprite = this.spriteAnimations.idle.frames[this.spriteAnimations.idle.currentFrame];
            this.spriteAnimations.idle.currentFrame++;
            if (this.spriteAnimations.idle.currentFrame >= 2) {
                this.spriteAnimations.idle.currentFrame = 0;
            }
          }
        }
      },

      leftJab: {
        animation: (data) => {
          if (data.entityFrame.littleMac % 5 === 0) {
            this.sprite = (this.spriteAnimations.leftJab.frames.reverse())[this.spriteAnimations.leftJab.currentFrame];
            this.spriteAnimations.leftJab.currentFrame++;
            if (this.spriteAnimations.leftJab.currentFrame >= 3) {
                this.spriteAnimations.leftJab.currentFrame = 0;
            }
          }
        }

      },

      rightJab:{

      },

      leftDodge:{

      },

      rightDodge:{

      }
    }

    this.currentState = this.states.idle;
  }




}

export default LittleMac;
