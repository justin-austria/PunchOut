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

  // let startNext = false;
  const roundOne = new Game(canvas, "glassJoe");
  // const roundTwo = new Game(canvas, "vonKaiser");

  setTimeout(() => {
    roundOne.intro();
    setTimeout(() => {
      roundOne.roundStart();
      roundOne.play();
    }, 7500)
  }, 1000);

  // while (!startNext) {
  //
  // }
  //
  // window.startNext = startNext;
  // console.log(startNext);

});
