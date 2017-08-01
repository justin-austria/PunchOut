import Sprite from './sprite';

class GlassJoe{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 19, 26, 80, 220);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.heartCount = 7;
    this.vulnerable = false;

    this.spriteAnimations = {
      idle : {
        frames: [new Sprite(img, 19, 26, 80, 220), new Sprite(img, 109, 26, 80, 220),
                 new Sprite(img, 199, 26, 80, 220)],
        currentFrame: 0
      },

      isHit: {
        frame: new Sprite(img, 19, 1156, 80, 220),
        currentFrame: 0
      },

      isBlocking: {
        frame: new Sprite(img, 19, 926, 80, 220),
        currentFrame: 0
      },

      punchPrep: {
        frame: new Sprite(img, 19, 476, 80, 220),
        currentFrame: 0
      },

      punchFire: {
        frame: new Sprite(img, 219, 476, 80, 220),
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
      },

      isBlocking: {
        animation: (data) => {
            this.sprite = this.spriteAnimations.isBlocking.frame;

        }
      },

      isHit: {
        animation: (data) => {
            this.sprite = this.spriteAnimations.isHit.frame;

        }
      },

      punchPrep: {
        name: "PunchPrep",
        animation: (data) => {
            console.log('test');
            this.sprite = this.spriteAnimations.punchPrep.frame;
        }
      },

      punchFire: {
        animation: (data) => {
            this.sprite = this.spriteAnimations.punchFire.frame;

        }
      }
    }

    this.currentState = this.states.idle;
  }

  prep() {

    this.currentState = this.states.punchPrep;

  }

  punch() {
    this.currentState = this.states.punchFire;

  }

  reidle() {
    this.currentState = this.states.idle;

  }


}

export default GlassJoe;
