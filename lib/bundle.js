/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sprite {
  constructor(img, srcX, srcY, srcW, srcH) {
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sprite);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(2);


document.addEventListener("DOMContentLoaded", function(){
  const canvasBot = document.getElementById("canvas-bot");
  const canvasMid = document.getElementById("canvas-mid");
  const canvasMidB = document.getElementById("canvas-mid-b");
  const canvasTop = document.getElementById("canvas-top");

  const canvas = {
    canvasBot,
    canvasMid,
    canvasMidB,
    canvasTop,
    ctxBot: canvasBot.getContext("2d"),
    ctxMid: canvasMid.getContext("2d"),
    ctxMidB: canvasMidB.getContext("2d"),
    ctxTop: canvasTop.getContext("2d")
  };

  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvas);

  setTimeout(() => {
    game.intro();
    setTimeout(() => {
      game.roundStart();
      game.play();
    }, 7500)
  }, 1000);

});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input__ = __webpack_require__(10);





class Game {
  constructor(canvas) {
    const ringSpriteSheet = new Image();
    ringSpriteSheet.src = "assets/img/ring-sprite.png";

    const macSpriteSheet = new Image();
    macSpriteSheet.src = "assets/img/little_mac2.png";

    const joeSpriteSheet = new Image();
    joeSpriteSheet.src = "assets/img/glass_joe.png";

    const refSpriteSheet = new Image();
    refSpriteSheet.src = "assets/img/ref_mario.png"

    const fightTheme = new Audio("assets/audio/11-fight-theme.mp3");
    fightTheme.loop = true;

    const winTheme = new Audio("assets/audio/14-you-win-.mp3");
    this.winTheme = winTheme;

    const loseTheme = new Audio("assets/audio/15-you-lose.mp3");
    this.loseTheme = loseTheme;

    const glassJoeTheme = new Audio("assets/audio/04-glass-joe-s-theme.mp3");
    this.glassJoeTheme = glassJoeTheme;

    const bell = new Audio("assets/audio/bell.wav");
    this.bell = bell;

    const muteBtn = document.getElementById("mute-bgm");
    const unmuteBtn = document.getElementById("unmute-bgm");

    muteBtn.addEventListener("click", () => {
      this.bgm.muted = true;
    })

    unmuteBtn.addEventListener("click", () => {
      this.bgm.muted = false;
    })

    this.data = {
      animationFrame: 0,
      canvas,
      entityFrame: {
        littleMac: 0,
        glassJoe: 0
      }
    }

    this.isOver = false

    this.bgm = fightTheme;
    this.input = new __WEBPACK_IMPORTED_MODULE_3__input__["a" /* default */](this.data);
    this.punchHit = new Audio("assets/audio/punch-hit.wav");

    ringSpriteSheet.addEventListener("load", () => {
      this.data.ringSpriteSheet = ringSpriteSheet
      this.display = new __WEBPACK_IMPORTED_MODULE_0__display__["a" /* default */](this.data);
      this.render = new __WEBPACK_IMPORTED_MODULE_1__render__["a" /* default */](this.data);
    });

    macSpriteSheet.addEventListener("load", () => {
      this.data.macSpriteSheet = macSpriteSheet
      this.display = new __WEBPACK_IMPORTED_MODULE_0__display__["a" /* default */](this.data);
      this.render = new __WEBPACK_IMPORTED_MODULE_1__render__["a" /* default */](this.data);
    });

    joeSpriteSheet.addEventListener("load", () => {
      this.data.joeSpriteSheet = joeSpriteSheet
      this.display = new __WEBPACK_IMPORTED_MODULE_0__display__["a" /* default */](this.data);
      this.render = new __WEBPACK_IMPORTED_MODULE_1__render__["a" /* default */](this.data);
    });

    refSpriteSheet.addEventListener("load", () => {
      this.data.refSpriteSheet = refSpriteSheet
      this.display = new __WEBPACK_IMPORTED_MODULE_0__display__["a" /* default */](this.data);
      this.render = new __WEBPACK_IMPORTED_MODULE_1__render__["a" /* default */](this.data);
    });

    window.data = this.data;
  }

  intro() {
    this.glassJoeTheme.play();
  }

  roundStart() {
    this.bell.play();
    setTimeout(() => {
      this.bell.pause();
    }, 1100);
  }

  play() {
    this.bgm.play();
    const loop = () => {
      if (this.data.glassJoe.heartCount < 1) {
        this.playerWin();
      }

      if (this.data.littleMac.heartCount < 1) {
        this.playerLose();
      }


      if (this.data.glassJoe.currentState.name === "prep" &&
        (this.data.littleMac.currentState.name === "leftJab" || this.data.littleMac.currentState.name === "rightJab")) {
        this.data.glassJoe.currentState = this.data.glassJoe.states.isHit;
        this.punchHit.play();
        this.data.glassJoe.heartCount--;
        this.data.glassJoe.heartMeter.removeChild(this.data.glassJoe.heartMeter.firstChild);
        this.data.glassJoe.heartMeter.removeChild(this.data.glassJoe.heartMeter.firstChild);
        setTimeout(() => {
          this.data.glassJoe.idle()
        }, 500);
        this.data.entityFrame.glassJoe = 0;
      } else {
        if (this.data.entityFrame.glassJoe > 100 && this.data.entityFrame.glassJoe < 150) {
          this.data.glassJoe.prep(this.data);
        }
        if (this.data.entityFrame.glassJoe > 150) {
          this.data.glassJoe.punch(this.data);
        }
      }



      if (this.data.entityFrame.glassJoe === 200) {
        this.data.glassJoe.idle();
        this.data.entityFrame.glassJoe = 0;
      }


      this.handleInput(this.data);
      this.updateAnimation(this.data);
      this.renderUpdate(this.data);

      this.data.animationFrame++;
      this.data.entityFrame.littleMac++;
      this.data.entityFrame.glassJoe++;

      if (!this.gameOver) {
        window.requestAnimationFrame(loop);
      }

    }

    loop();
  }

  handleInput(data) {
    this.input.keyUpdate(data);

  }

  updateAnimation(data) {
    __WEBPACK_IMPORTED_MODULE_2__animation__["a" /* default */].update(data);
  }

  renderUpdate(data) {
    this.render.update(data)
  }

  playerWin() {
    this.bgm.muted = true;
    this.winTheme.play();
    this.gameOver = true;
    const loop = () => {
        this.data.glassJoe.currentState = this.data.glassJoe.states.isHit;
        this.data.glassJoe.knockout();
        this.updateAnimation(this.data);
        this.renderUpdate(this.data);
        this.data.animationFrame++;
        window.requestAnimationFrame(loop);
    }
    loop();
  }

  playerLose() {
    this.bgm.muted = true;
    this.loseTheme.play();
    this.gameOver = true;

  }


}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_background__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_little_mac__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_glass_joe__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_ref_mario__ = __webpack_require__(8);





class Display {
  constructor(data) {
    const background = {
      sprite: new __WEBPACK_IMPORTED_MODULE_0__entities_background__["a" /* default */](data.ringSpriteSheet, 0, 0, 648, 479),
      x: 0,
      y: 0,
      w: 648,
      h: 479
    };

    const littleMac = new __WEBPACK_IMPORTED_MODULE_1__entities_little_mac__["a" /* default */](data.macSpriteSheet, 320, 300, 72, 161);
    const glassJoe = new __WEBPACK_IMPORTED_MODULE_2__entities_glass_joe__["a" /* default */](data.joeSpriteSheet, 310, 200, 90, 220);
    const refMario = new __WEBPACK_IMPORTED_MODULE_3__entities_ref_mario__["a" /* default */](data.refSpriteSheet, 500, 200, 75, 120);

    data.background = background;
    data.littleMac = littleMac;
    data.glassJoe = glassJoe;
    data.refMario = refMario;
  }
}



/* harmony default export */ __webpack_exports__["a"] = (Display);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(0);


class Background extends __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */] {
  constructor(img, srcX, srcY, srcW, srcH) {
    super(img, srcX, srcY, srcW, srcH);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Background);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(0);


class LittleMac{
  constructor(img, x, y, w, h){
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 28, 10, 72, 161);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.heartCount = 4;
    this.heartMeter = document.getElementById("mac-health");
    this.energyCount = 6;
    this.energyMeter = document.getElementById("mac-energy");
    this.punchBlock = new Audio("assets/audio/punch-block.wav");
    this.dodge = new Audio("assets/audio/dodge.wav");

    this.spriteAnimations = {
      idle : {
        frames: [new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 28, 10, 72, 161), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 98, 10, 72, 161)],
        currentFrame: 0
      },

      leftJab: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 170, 480, 72, 161),
        currentFrame: 0
      },

      rightJab: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 470, 480, 72, 161),
        currentFrame: 0
      },

      noEnergy: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 26, 1010, 72, 161),
        currentFrame: 0
      },

      leftDodge: {
        frames: [new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 21, 160, 72, 161), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 91, 160, 72, 161),
                 new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 161, 160, 72, 161)],
        currentFrame: 0
      },

      rightDodge: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 561, 160, 72, 161),
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

/* harmony default export */ __webpack_exports__["a"] = (LittleMac);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Render {
  constructor(data) {
    this.drawEntity(data.background, data.canvas.ctxBot);
    this.drawEntity(data.glassJoe, data.canvas.ctxMid);
    this.drawEntity(data.refMario, data.canvas.ctxMidB);
    this.drawEntity(data.littleMac, data.canvas.ctxTop);
  }

  drawEntity(entity, ctx) {
    ctx.clearRect(0, 0, 648, 479);
    ctx.drawImage(entity.sprite.img,
                    entity.sprite.srcX, entity.sprite.srcY,
                    entity.sprite.srcW, entity.sprite.srcH,
                    entity.x, entity.y,
                    entity.w, entity.h)
  }

  update(data) {
    this.drawEntity(data.glassJoe, data.canvas.ctxMid);
    this.drawEntity(data.refMario, data.canvas.ctxMidB);
    this.drawEntity(data.littleMac, data.canvas.ctxTop);
  }


}

/* harmony default export */ __webpack_exports__["a"] = (Render);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(0);


class GlassJoe{
  constructor(img, x, y, w, h){
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 104, 1580, 80, 220);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.heartCount = 4;
    this.heartMeter = document.getElementById("joe-health");
    this.vulnerable = false;

    this.playerHit = new Audio("assets/audio/player-hit.wav");
    this.windUp = new Audio("assets/audio/wind-up.wav");

    this.spriteAnimations = {

      idle : {
        frames: [new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 19, 26, 80, 220), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 109, 26, 80, 220),
                 new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 199, 26, 80, 220)],
        currentFrame: 0
      },

      isHit: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 19, 1156, 80, 220),
        currentFrame: 0
      },

      isBlocking: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 19, 926, 80, 220),
        currentFrame: 0
      },

      punchPrep: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 19, 476, 80, 220),
        currentFrame: 0
      },

      punchFire: {
        frame: new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 209, 476, 80, 220),
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

/* harmony default export */ __webpack_exports__["a"] = (GlassJoe);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(0);


class RefMario{
  constructor(img, x, y, w, h){
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 0, 0, 50, 75);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.spriteAnimations = {
      idle : {
        frames: [new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 0, 0, 50, 75), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 50, 0, 50, 75)],
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

/* harmony default export */ __webpack_exports__["a"] = (RefMario);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Animation = {
  update: function(data) {
    Animation.glassJoe(data);
    Animation.littleMac(data);
    Animation.refMario(data);
  },

  glassJoe: function(data) {
    data.glassJoe.currentState.animation(data);
  },

  littleMac: function(data) {
    data.littleMac.currentState.animation(data);
  },

  refMario: function(data) {
    data.refMario.currentState.animation(data);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Animation);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//TODO: Lock input while animation running?

class Input {
  constructor(data) {

    this.validInputs = ["a","A","d","D","j","J","l","L"," "]

    data.animationRunning = false;

    window.addEventListener('keyup', (e) => {

      this.fired = false;

    })

    window.addEventListener('keydown', (e) => {
      if (this.fired) {
        return false
      }
      this.fired = true

      if (this.validInputs.includes(e.key)) {
        switch (e.key) {
          case 'a':
          case 'A':
          case 'd':
          case 'D':
            this.animationLength = 400;
            break;
          case 'j':
          case 'J':
          case 'l':
          case 'L':
            this.animationLength = 300;
            break;
          default:
        }

        if (data.animationRunning === false) {
          data.keyPress = e.key;
        }

        setTimeout(() => {
          data.keyPress = false;
        }, 50)
        setTimeout(() => {
          data.animationRunning = false;
          this.resetEntityPosition(data);
          data.littleMac.currentState = data.littleMac.states.idle;
        }, this.animationLength);
      }
    })
  }

  resetEntityPosition(data) {
    data.littleMac.x = 320;
  }

  keyUpdate(data) {
    // if (data.keyLock === true) {
    //   return false
    // }

    if (!data.animationRunning) {
        switch (data.keyPress) {
        case "a":
        case "A":
          data.animationRunning = true;
          if (data.entityFrame.littleMac > 30) {
             data.entityFrame.littleMac = 0;
          }
          if (data.littleMac.energyCount > 0) {

            data.littleMac.currentState = data.littleMac.states.leftJab;

            if (data.glassJoe.currentState.name === "idle") {
              data.glassJoe.currentState = data.glassJoe.states.isBlocking;
            } else if (data.glassJoe.currentState.name === "prep") {
                data.glassJoe.currentState = data.glassJoe.states.isHit;
            }

            data.littleMac.energyCount--;
            data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
            data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
          } else {
            data.littleMac.currentState = data.littleMac.states.noEnergy;
          }
          break;
        case "d":
        case "D":
        if (data.littleMac.energyCount > 0) {
          data.animationRunning = true;
            if (data.entityFrame.littleMac > 30) {
               data.entityFrame.littleMac = 0;
            }
            data.littleMac.currentState = data.littleMac.states.rightJab;

            if (data.glassJoe.currentState.name === "idle") {
              data.glassJoe.currentState = data.glassJoe.states.isBlocking;
            } else if (data.glassJoe.currentState.name === "prep") {
                data.glassJoe.currentState = data.glassJoe.states.isHit;
            }
            if (data.littleMac.energyCount > 0) {
              data.littleMac.energyCount--;
              data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
              data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
            }
          }
          break;
        case "j":
        case "J":
          if (data.entityFrame.littleMac > 20) {
             data.entityFrame.littleMac = 0;
          }
            data.littleMac.currentState = data.littleMac.states.leftDodge;
          break;
        case "l":
        case "L":
          if (data.entityFrame.littleMac > 20) {
             data.entityFrame.littleMac = 0;
          }
            data.littleMac.currentState = data.littleMac.states.rightDodge;
          break;
        case " ":
          console.log("get up!")
          break;
        default:
      }
    }
  }


}

/* harmony default export */ __webpack_exports__["a"] = (Input);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map