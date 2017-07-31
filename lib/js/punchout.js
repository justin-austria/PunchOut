import Game from "./game";

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

  const game = new Game(canvas);
  setTimeout(() => {
    game.play();
  }, 1000);

});
