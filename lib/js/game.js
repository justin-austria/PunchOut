import Display from './display';
import Render from './render';
import Animation from './animation';

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
    Animation.update(data);
  }

  renderUpdate(data) {
    this.render.update(data)
  }


}

export default Game;