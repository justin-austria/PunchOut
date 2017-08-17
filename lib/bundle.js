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


  const roundOne = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvas, "glassJoe");
  // const roundTwo = new Game(canvas, "vonKaiser");

  setTimeout(() => {
    roundOne.intro();
    setTimeout(() => {
      roundOne.roundStart();
      roundOne.play();
    }, 7500)
  }, 3000);


});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input__ = __webpack_require__(11);





class Game {
  constructor(canvas, currentOpponent) {

    this.gameOver = false;
    this.data = {
      animationFrame: 0,
      canvas,
      entityFrame: {
        littleMac: 0,
        glassJoe: 0
      },
      currentOpponent
    }

    this.audio = {
      fightTheme: new Audio("assets/audio/11-fight-theme.mp3"),
      winTheme: new Audio("assets/audio/14-you-win-.mp3"),
      loseTheme: new Audio("assets/audio/15-you-lose.mp3"),
      glassJoeTheme: new Audio("assets/audio/04-glass-joe-s-theme.mp3"),
      vonKaiserTheme: new Audio("assets/audio/05-von-kaiser-s-theme.mp3"),
      pistonHondaTheme: new Audio("assets/audio/06-piston-honda-s-theme.mp3"),
      bell: new Audio("assets/audio/bell.wav"),
      punchHit: new Audio("assets/audio/punch-hit.wav")

    }

    this.audio["fightTheme"].loop = true;
    this.loadAudioButtons();

    this.spriteSheets = {
      ring: new Image(),
      mac: new Image(),
      joe: new Image(),
      ref: new Image()
    }

    this.spriteSheets.opponent = new Image();
    console.log(currentOpponent);
    switch (currentOpponent) {
      case "glassJoe":
        this.loadSprites("opponent", "assets/img/glass_joe.png");
        break;
      case "vonKaiser":
        this.loadSprites("opponent", "assets/img/von_kaiser.png");
        break;
      default:
    }


    this.loadSprites("ring", "assets/img/ring-sprite.png");
    this.loadSprites("mac", "assets/img/little_mac2.png");
    this.loadSprites("joe", "assets/img/glass_joe.png");
    this.loadSprites("ref", "assets/img/ref_mario.png");

    this.input = new __WEBPACK_IMPORTED_MODULE_3__input__["a" /* default */](this.data);
    this.winModal = document.getElementById("win-modal");
    this.loseModal = document.getElementById("lose-modal");
  }

  loadSprites(spriteName, filePath) {
    this.spriteSheets[spriteName].src = filePath;
    this.spriteSheets[spriteName].addEventListener("load", () => {
      this.data[`${spriteName}SpriteSheet`] = this.spriteSheets[spriteName];
      this.display = new __WEBPACK_IMPORTED_MODULE_0__display__["a" /* default */](this.data);
      this.render = new __WEBPACK_IMPORTED_MODULE_1__render__["a" /* default */](this.data);
    });
  }

  loadAudioButtons() {
    const MUTE_BTN = document.getElementById("mute-bgm");
    const UNMUTE_BTN = document.getElementById("unmute-bgm");

    MUTE_BTN.addEventListener("click", () => {
      this.audio["fightTheme"].muted = true;
    })

    UNMUTE_BTN.addEventListener("click", () => {
      this.audio["fightTheme"].muted = false;
    })
  }

  tutorial() {
    const loop = () => {
        if (this.animationOver) {
          return false;
        }
        this.updateAnimation(this.data);
        this.renderUpdate(this.data);
        this.data.animationFrame++;
        window.requestAnimationFrame(loop);
    }
    loop();
  }

  intro() {
    this.audio["glassJoeTheme"].play();
    this.data.canvas.ctxTop.font = '15px "Press Start 2P"';
    this.data.canvas.ctxTop.fillStyle = "white";
    this.data.canvas.ctxTop.fillText("#2 Minor Circuit: Glass Joe",150,120);
    this.data.canvas.ctxTop.font = '30px "Press Start 2P"';
    let counter = 3;
    let countdown = setInterval(() => {
      if (counter < 1) {
        clearInterval(countdown);
      }
      if (counter === 0) {
        counter = "Fight!";
        this.data.canvas.ctxTop.clearRect(0,0,800,300);
        this.data.canvas.ctxTop.fillText(`${counter}`,280,160);
        return false;
      }
      this.data.canvas.ctxTop.clearRect(0,120,800,200);
      this.data.canvas.ctxTop.fillText(`${counter}`,340,160);
      counter--;
    }, 1500)
  }

  roundStart() {
    this.audio["bell"].play();
    setTimeout(() => {
      this.audio["bell"].pause();
    }, 1100);
  }

  successfulHit() {
    if (this.data[this.data.currentOpponent].currentState.name === "prep" &&
      (this.data.littleMac.currentState.name === "leftJab" || this.data.littleMac.currentState.name === "rightJab")) {
      this.data[this.data.currentOpponent].currentState = this.data[this.data.currentOpponent].states.isHit;
      this.audio["punchHit"].play();
      this.data[this.data.currentOpponent].heartCount--;
      this.data[this.data.currentOpponent].heartMeter.removeChild(this.data[this.data.currentOpponent].heartMeter.firstChild);
      this.data[this.data.currentOpponent].heartMeter.removeChild(this.data[this.data.currentOpponent].heartMeter.firstChild);
      setTimeout(() => {
        this.data[this.data.currentOpponent].idle()
      }, 500);
      this.data.entityFrame[this.data.currentOpponent] = 0;
    } else {
      if (this.data.entityFrame[this.data.currentOpponent] > 100 && this.data.entityFrame[this.data.currentOpponent] < 150) {
        this.data[this.data.currentOpponent].prep(this.data);
      }
      if (this.data.entityFrame[this.data.currentOpponent] > 150) {
        this.data[this.data.currentOpponent].punch(this.data);
      }
    }

    if (this.data.entityFrame[this.data.currentOpponent] === 200) {
      this.data[this.data.currentOpponent].idle();
      this.data.entityFrame[this.data.currentOpponent] = 0;
    }
  }

  play() {
    this.audio["fightTheme"].play();

    const loop = () => {
      if (this.data[this.data.currentOpponent].heartCount < 1) {
        // this.data.canvas.ctxTop.font = '15px "Press Start 2P"';
        // this.data.canvas.ctxTop.fillStyle = "white";
        this.playerWin();
      }
      if (this.data.littleMac.heartCount < 1) {
        this.playerLose();
      }



      this.successfulHit();
      this.handleInput(this.data);
      this.updateAnimation(this.data);
      this.renderUpdate(this.data);

      this.data.animationFrame++;
      this.data.entityFrame.littleMac++;
      this.data.entityFrame[this.data.currentOpponent]++;

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
    this.winModal.classList.remove("hidden");
    this.audio["fightTheme"].muted = true;
    this.audio["winTheme"].play();
    this.gameOver = true;
    this.animationOver = false;

    // setTimeout(() => {
    //   this.animationOver= true;
      //// LOGIC TO START NEXT ROUND
    //   const nextRound = new Game(this.data.canvas, "glassJoe");
    //   setTimeout(() => {
    //     nextRound.play();
    //   }, 1000);
    // }, 5000);
    const loop = () => {
        if (this.animationOver) {
          return false;
        }
        this.data[this.data.currentOpponent].currentState = this.data[this.data.currentOpponent].states.isHit;
        this.data[this.data.currentOpponent].knockout();
        this.updateAnimation(this.data);
        this.renderUpdate(this.data);
        this.data.animationFrame++;
        window.requestAnimationFrame(loop);
    }
    loop();
  }

  playerLose() {
    this.loseModal.classList.remove("hidden");
    this.audio["fightTheme"].muted = true;
    this.audio["loseTheme"].play();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_glass_joe__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_von_kaiser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_ref_mario__ = __webpack_require__(8);






class Display {
  constructor(data) {
    const background = {
      sprite: new __WEBPACK_IMPORTED_MODULE_0__entities_background__["a" /* default */](data.ringSpriteSheet, 0, 0, 648, 479),
      x: 0,
      y: 0,
      w: 648,
      h: 479
    };

    let opponent;

    switch (data.currentOpponent) {
      case "glassJoe":
        opponent = new __WEBPACK_IMPORTED_MODULE_2__entities_glass_joe__["a" /* default */](data.opponentSpriteSheet, 310, 200, 90, 220);
        break;
      case "vonKaiser":
        opponent = new __WEBPACK_IMPORTED_MODULE_3__entities_von_kaiser__["a" /* default */](data.opponentSpriteSheet, 310, 200, 90, 220);
        break;
      default:

    }


    const littleMac = new __WEBPACK_IMPORTED_MODULE_1__entities_little_mac__["a" /* default */](data.macSpriteSheet, 320, 300, 72, 161);
    // const glassJoe = new GlassJoe(data.joeSpriteSheet, 310, 200, 90, 220);
    const refMario = new __WEBPACK_IMPORTED_MODULE_4__entities_ref_mario__["a" /* default */](data.refSpriteSheet, 500, 200, 75, 120);

    data.background = background;
    data.littleMac = littleMac;
    data[data.currentOpponent]= opponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(0);


class GlassJoe{
  constructor(img, x, y, w, h){
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 104, 1580, 80, 220);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    let heartRenderCount;
    if (this.heartCount) {
      heartRenderCount = this.heartCount
    } else {
      heartRenderCount = 4;
    }

    this.heartCount = 4;
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(0);


class VonKaiser{
  constructor(img, x, y, w, h){
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 104, 1580, 80, 220);
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
        frames: [new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 37, 290, 80, 220), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 137, 290, 80, 220),
                 new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 237, 290, 80, 220), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 337, 290, 80, 220)],
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

/* harmony default export */ __webpack_exports__["a"] = (VonKaiser);


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
class Render {
  constructor(data) {

    this.drawEntity(data.background, data.canvas.ctxBot);
    this.drawEntity(data[data.currentOpponent], data.canvas.ctxMid);
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
    this.drawEntity(data[data.currentOpponent], data.canvas.ctxMid);
    this.drawEntity(data.refMario, data.canvas.ctxMidB);
    this.drawEntity(data.littleMac, data.canvas.ctxTop);
  }


}

/* harmony default export */ __webpack_exports__["a"] = (Render);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Animation = {
  update: function(data) {
    Animation[data.currentOpponent](data);
    Animation.littleMac(data);
    Animation.refMario(data);
  },

  glassJoe: function(data) {
    data.glassJoe.currentState.animation(data);
  },

  vonKaiser: function(data) {
    data.vonKaiser.currentState.animation(data);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Input {
  constructor(data) {

    this.validInputs = ["a","A","d","D","ArrowLeft","ArrowRight"]

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
          case 'ArrowLeft':
          case 'ArrowRight':
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

            if (data[data.currentOpponent].currentState.name === "idle") {
              data[data.currentOpponent].currentState = data[data.currentOpponent].states.isBlocking;
            } else if (data[data.currentOpponent].currentState.name === "prep") {
                data[data.currentOpponent].currentState = data[data.currentOpponent].states.isHit;
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

            if (data[data.currentOpponent].currentState.name === "idle") {
              data[data.currentOpponent].currentState = data[data.currentOpponent].states.isBlocking;
            } else if (data[data.currentOpponent].currentState.name === "prep") {
                data[data.currentOpponent].currentState = data[data.currentOpponent].states.isHit;
            }
            if (data.littleMac.energyCount > 0) {
              data.littleMac.energyCount--;
              data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
              data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
            }
          }
          break;
        case "ArrowLeft":
          if (data.entityFrame.littleMac > 20) {
             data.entityFrame.littleMac = 0;
          }
            data.littleMac.currentState = data.littleMac.states.leftDodge;
          break;
        case "ArrowRight":
          if (data.entityFrame.littleMac > 20) {
             data.entityFrame.littleMac = 0;
          }
            data.littleMac.currentState = data.littleMac.states.rightDodge;
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