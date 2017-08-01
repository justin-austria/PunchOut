import Sprite from './sprite';

class LittleMac{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 28, 10, 72, 161);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.heartCount = 7;

    this.punchHit = new Audio("assets/audio/punch-hit.wav");
    this.punchBlock = new Audio("assets/audio/punch-block.wav");
    this.dodge = new Audio("assets/audio/dodge.wav");

    this.spriteAnimations = {
      idle : {
        frames: [new Sprite(img, 28, 10, 72, 161), new Sprite(img, 98, 10, 72, 161)],
        currentFrame: 0
      },

      leftJab: {
        frame: new Sprite(img, 170, 480, 72, 161),
        currentFrame: 0
      },

      rightJab: {
        frames: [],
        currentFrame: 0
      },

      leftDodge: {
        frames: [new Sprite(img, 21, 160, 72, 161), new Sprite(img, 91, 160, 72, 161),
                 new Sprite(img, 161, 160, 72, 161)],
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
        name: "leftJab",
        animation: (data) => {
          if (data.entityFrame.littleMac % 30 === 0) {
            this.punchBlock.currentTime = 0;
            this.punchBlock.play();
            this.sprite = this.spriteAnimations.leftJab.frame;
          }

        }

      },

      rightJab:{

      },

      leftDodge:{
        animation: (data) => {

          if (data.entityFrame.littleMac % 50 === 0) {
            this.x = 290;
            this.dodge.currentTime = 0;
            this.dodge.play();
            this.sprite = (this.spriteAnimations.leftDodge.frames.reverse())[this.spriteAnimations.leftDodge.currentFrame];
            this.spriteAnimations.leftDodge.currentFrame++;
            if (this.spriteAnimations.leftDodge.currentFrame >= 2) {
                this.spriteAnimations.leftDodge.currentFrame = 0;
            }
          }
        }
      },

      rightDodge:{

      }
    }

    this.currentState = this.states.idle;
  }




}

export default LittleMac;
