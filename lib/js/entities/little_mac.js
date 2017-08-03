import Sprite from './sprite';

class LittleMac{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 28, 10, 72, 161);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    let heartRenderCount;
    let energyRenderCount;
    if (this.heartCount) {
      heartRenderCount = this.heartCount
    } else {
      heartRenderCount = 4;
    }

    if (this.energyCount) {
      energyRenderCount = this.energyCount
    } else {
      energyRenderCount = 6;
    }

    this.heartCount = 4;
    this.heartMeter = document.getElementById("mac-health");
    this.energyCount = 6;
    this.energyMeter = document.getElementById("energy-meter");

    while (this.heartMeter.hasChildNodes()) {
      this.heartMeter.removeChild(this.heartMeter.lastChild);
    }

    while (this.energyMeter.hasChildNodes()) {
      this.energyMeter.removeChild(this.energyMeter.lastChild);
    }

    let newHeart = document.createElement("I");
    let space = document.createTextNode( '\u00A0' );
    newHeart.className = "fa fa-heart";

    let newEnergy = document.createElement("I");
    newEnergy.className = "fa fa-hand-rock-o";


    for (let i = 0; i < heartRenderCount; i++) {
      this.heartMeter.appendChild(newHeart.cloneNode());
      this.heartMeter.appendChild(space.cloneNode());
    };

    for (let j = 0; j < energyRenderCount; j++) {
      this.energyMeter.appendChild(newEnergy.cloneNode());
      this.energyMeter.appendChild(space.cloneNode());
    };




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
        frame: new Sprite(img, 470, 480, 72, 161),
        currentFrame: 0
      },

      noEnergy: {
        frame: new Sprite(img, 26, 1010, 72, 161),
        currentFrame: 0
      },

      leftDodge: {
        frames: [new Sprite(img, 21, 160, 72, 161), new Sprite(img, 91, 160, 72, 161),
                 new Sprite(img, 161, 160, 72, 161)],
        currentFrame: 0
      },

      rightDodge: {
        frame: new Sprite(img, 561, 160, 72, 161),
        currentFrame: 0
      }
    }

    this.states = {
      idle: {
        name: "idle",
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
        name: "rightJab",
        animation: (data) => {
          if (data.entityFrame.littleMac % 30 === 0) {
            this.punchBlock.currentTime = 0;

            this.punchBlock.play();
            this.sprite = this.spriteAnimations.rightJab.frame;
          }

        }
      },

      noEnergy: {
        name: "noEnergy",
        animation: (data) => {
          if (data.entityFrame.littleMac % 30 === 0) {
            this.sprite = this.spriteAnimations.noEnergy.frame;
          }
        }
      },

      leftDodge:{
        name: "leftDodge",

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
        name: "rightDodge",
        animation: (data) => {

          if (data.entityFrame.littleMac % 50 === 0) {
            this.x = 340;
            this.dodge.currentTime = 0;
            this.dodge.play();
            this.sprite = this.spriteAnimations.rightDodge.frame;

          }
        }
      }
    }

    this.currentState = this.states.idle;
  }




}

export default LittleMac;
