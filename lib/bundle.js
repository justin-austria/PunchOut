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

// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function(){
  const canvasBot = document.getElementById("canvas-bot");
  const canvasMid = document.getElementById("canvas-mid");
  const canvasTop = document.getElementById("canvas-top");

  const canvas = {
    canvasBot,
    canvasMid,
    canvasTop,
    ctxBot: canvasBot.getContext("2d"),
    ctxMid: canvasMid.getContext("2d"),
    ctxTop: canvasTop.getContext("2d")
  };

  new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvas);
  // new GameView(game, canvas);

});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(6);



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

  }

  input() {

  }

  update() {

  }

  render() {

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
    const glassJoe = new __WEBPACK_IMPORTED_MODULE_2__entities_glass_joe__["a" /* default */](data.joeSpriteSheet, 300, 200, 90, 200);
    const refMario = new __WEBPACK_IMPORTED_MODULE_3__entities_ref_mario__["a" /* default */](data.refSpriteSheet, 300, 200, 90, 200);

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
    this.drawEntity(data.refMario, data.canvas.ctxMid);
    this.drawEntity(data.littleMac, data.canvas.ctxTop);
  }

  drawEntity(entity, ctx) {
    ctx.drawImage(entity.sprite.img,
                    entity.sprite.srcX, entity.sprite.srcY,
                    entity.sprite.srcW, entity.sprite.srcH,
                    entity.x, entity.y,
                    entity.w, entity.h)
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
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 26, 29, 80, 200);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
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
    this.sprite = new __WEBPACK_IMPORTED_MODULE_0__sprite__["a" /* default */](img, 26, 29, 52, 131);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (RefMario);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map