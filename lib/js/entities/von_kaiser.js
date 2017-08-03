import Sprite from './sprite';

class VonKaiser{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 104, 1580, 80, 220);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    let heartRenderCount;
    if (this.heartCount) {
      heartRenderCount = this.heartCount
    } else {
      heartRenderCount = 5;
    }

    this.heartCount = 5;
    this.heartMeter = document.getElementById("opp-health");

    while (this.heartMeter.hasChildNodes()) {
      this.heartMeter.removeChild(this.heartMeter.lastChild);
    }

    let newHeart = document.createElement("I");
    let space = document.createTextNode( '\u00A0' );
    newHeart.className = "fa fa-heart";


    for (let i = 0; i < heartRenderCount; i++) {
      this.heartMeter.appendChild(newHeart.cloneNode());
      this.heartMeter.appendChild(space.cloneNode());
    }


    this.vulnerable = false;

    this.playerHit = new Audio("assets/audio/player-hit.wav");
    this.windUp = new Audio("assets/audio/wind-up.wav");

    this.spriteAnimations = {

      idle : {
        frames: [new Sprite(img, 37, 290, 80, 220), new Sprite(img, 137, 290, 80, 220),
                 new Sprite(img, 237, 290, 80, 220), new Sprite(img, 337, 290, 80, 220)],
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
        frame: new Sprite(img, 209, 476, 80, 220),
        currentFrame: 0
      }

    }

    this.states = {
      intro: {
        name: "intro",
        animation: (data) => {
          this.sprite = this.spriteAnimations.intro.frame;
        }
      },
      idle: {
        name: "idle",
        animation: (data) => {
          if (data.animationFrame % 13 === 0) {
            this.sprite = (this.spriteAnimations.idle.frames.reverse())[this.spriteAnimations.idle.currentFrame];
            this.spriteAnimations.idle.currentFrame++;
            if (this.spriteAnimations.idle.currentFrame >= 4) {
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
        name: "prep",
        animation: (data) => {
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

  prep(data) {
    setTimeout(() => {
      this.windUp.play();
    }, 150)

    this.currentState = this.states.punchPrep;

  }

  punch(data) {
    this.currentState = this.states.punchFire;

    if (data.entityFrame.glassJoe % 151 === 0) {
      if (data.littleMac.currentState.name === "idle") {
        data.littleMac.heartCount--;
        data.littleMac.heartMeter.removeChild(data.littleMac.heartMeter.firstChild);
        data.littleMac.heartMeter.removeChild(data.littleMac.heartMeter.firstChild);
        this.playerHit.play();
      } else if (data.littleMac.currentState.name === "leftDodge" || data.littleMac.currentState.name === "rightDodge" ) {
        if (data.littleMac.energyCount < 6) {
          let newEnergy = document.createElement("I");
          newEnergy.className = "fa fa-hand-rock-o";
          data.littleMac.energyMeter.appendChild(newEnergy);
          data.littleMac.energyMeter.appendChild(document.createTextNode( '\u00A0' ));
          data.littleMac.energyCount++;
        }
      }
    }



  }

  idle() {
    this.currentState = this.states.idle;

  }

  knockout() {
    this.y -= 10;
  }

}

export default VonKaiser;
