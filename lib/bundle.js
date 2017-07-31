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
    game.play();
  }, 1000);

});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation__ = __webpack_require__(9);




class Game {
  constructor(canvas) {
    const ringSpriteSheet = new Image();
    ringSpriteSheet.src = "assets/img/ring-sprite.png";

    const macSpriteSheet = new Image();
    macSpriteSheet.src = "assets/img/little_mac.png";

    const joeSpriteSheet = new Image();
    joeSpriteSheet.src = "assets/img/glass_joe.png";

    const refSpriteSheet = new Image();
    refSpriteSheet.src = "assets/img/ref_mario.png"

    const fightTheme = new Audio("assets/audio/11-fight-theme.mp3");
    fightTheme.loop = true;

    this.data = { animationFrame: 0, canvas }
    this.bgm = fightTheme;

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


  }

  play() {
    const loop = () => {

      this.updateAnimation(this.data);
      this.renderUpdate(this.data);

      this.data.animationFrame++;
      window.requestAnimationFrame(loop);
    }

    loop();
  }

  input() {

  }

  updateAnimation(data) {
    __WEBPACK_IMPORTED_MODULE_2__animation__["a" /* default */].update(data);
  }

  renderUpdate(data) {
    this.render.update(data)
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

    const littleMac = new __WEBPACK_IMPORTED_MODULE_1__entities_little_mac__["a" /* default */](data.macSpriteSheet, 324, 320, 52, 131);
    const glassJoe = new __WEBPACK_IMPORTED_MODULE_2__entities_glass_joe__["a" /* default */](data.joeSpriteSheet, 300, 200, 90, 220);
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
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 26, 29, 52, 131);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.spriteAnimations = {
      idle : {
        frames: [new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 26, 29, 52, 131), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 96, 29, 52, 131)],
        currentFrame: 0
      }
    }

    this.states = {
      idle: {
        animation: (data) => {
          if (data.animationFrame % 39 === 0) {
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
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 19, 26, 80, 220);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.spriteAnimations = {
      idle : {
        frames: [new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 19, 26, 80, 220), new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 109, 26, 80, 220),
                 new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 199, 26, 80, 220)],
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map