import Display from './display';
import Render from './render';
import Animation from './animation';
import Input from './input';

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

    const winTheme = new Audio("assets/audio/14-you-win-.mp3");
    this.winTheme = winTheme;

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
    this.input = new Input(this.data);
    this.punchHit = new Audio("assets/audio/punch-hit.wav");

    ringSpriteSheet.addEventListener("load", () => {
      this.data.ringSpriteSheet = ringSpriteSheet
      this.display = new Display(this.data);
      this.render = new Render(this.data);
    });

    macSpriteSheet.addEventListener("load", () => {
      this.data.macSpriteSheet = macSpriteSheet
      this.display = new Display(this.data);
      this.render = new Render(this.data);
    });

    joeSpriteSheet.addEventListener("load", () => {
      this.data.joeSpriteSheet = joeSpriteSheet
      this.display = new Display(this.data);
      this.render = new Render(this.data);
    });

    refSpriteSheet.addEventListener("load", () => {
      this.data.refSpriteSheet = refSpriteSheet
      this.display = new Display(this.data);
      this.render = new Render(this.data);
    });

    window.data = this.data;
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



      if (this.data.glassJoe.currentState.name === "prep" && this.data.littleMac.currentState.name === "leftJab") {
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
    Animation.update(data);
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
    // this.winTheme.play();
    this.gameOver = true;

  }


}

export default Game;
