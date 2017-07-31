import Game from "./game";
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

  new Game(canvas);
  // new GameView(game, canvas);

});
