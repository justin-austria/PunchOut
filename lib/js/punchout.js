import Game from "./game";

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

  const game = new Game(canvas);

  setTimeout(() => {
    game.intro();
    setTimeout(() => {
      game.play();
    }, 7500)
  }, 1000);

});
