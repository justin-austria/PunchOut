import Display from './display';
import Render from './render';
import Animation from './animation';
import Input from './input';

class Game {
  constructor(canvas) {
    this.spriteSheets = {
      ring: new Image(),
      mac: new Image(),
      joe: new Image(),
      ref: new Image()
    }
    
    this.spriteSheets["ring"].src = "assets/img/ring-sprite.png";
    this.spriteSheets["mac"].src = "assets/img/little_mac2.png";
    this.spriteSheets["joe"].src = "assets/img/glass_joe.png";
    this.spriteSheets["ref"].src = "assets/img/ref_mario.png";

    this.audio = {
      fightTheme: new Audio("assets/audio/11-fight-theme.mp3"),
      winTheme: new Audio("assets/audio/14-you-win-.mp3"),
      loseTheme: new Audio("assets/audio/15-you-lose.mp3"),
      glassJoeTheme: new Audio("assets/audio/04-glass-joe-s-theme.mp3"),
      bell: new Audio("assets/audio/bell.wav"),
      punchHit: new Audio("assets/audio/punch-hit.wav")

    }

    this.audio["fightTheme"].loop = true;

    const MUTE_BTN = document.getElementById("mute-bgm");
    const UNMUTE_BTN = document.getElementById("unmute-bgm");

    MUTE_BTN.addEventListener("click", () => {
      this.audio["fightTheme"].muted = true;
    })

    UNMUTE_BTN.addEventListener("click", () => {
      this.audio["fightTheme"].muted = false;
    })

    this.data = {
      animationFrame: 0,
      canvas,
      entityFrame: {
        littleMac: 0,
        glassJoe: 0
      }
    }

    this.input = new Input(this.data);

    this.loadSprites("ring");
    this.loadSprites("mac");
    this.loadSprites("joe");
    this.loadSprites("ref");

    window.data = this.data;
  }

  loadSprites(spriteName) {
    this.spriteSheets[spriteName].addEventListener("load", () => {
      this.data[`${spriteName}SpriteSheet`] = this.spriteSheets[spriteName];
      this.display = new Display(this.data);
      this.render = new Render(this.data);
    });
  }

  intro() {
    this.audio["glassJoeTheme"].play();
  }

  roundStart() {
    this.audio["bell"].play();
    setTimeout(() => {
      this.audio["bell"].pause();
    }, 1100);
  }

  play() {
    this.audio["fightTheme"].play();
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
        this.audio["punchHit"].play();
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
    this.audio["fightTheme"].muted = true;
    this.audio["winTheme"].play();
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
    this.audio["fightTheme"].muted = true;
    this.audio["loseTheme"].play();
    this.gameOver = true;

  }


}

export default Game;
