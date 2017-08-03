import Background from './entities/background';
import LittleMac from './entities/little_mac';
import GlassJoe from './entities/glass_joe';
import VonKaiser from './entities/von_kaiser';
import RefMario from './entities/ref_mario';

class Display {
  constructor(data) {
    const background = {
      sprite: new Background(data.ringSpriteSheet, 0, 0, 648, 479),
      x: 0,
      y: 0,
      w: 648,
      h: 479
    };

    let opponent;

    switch (data.currentOpponent) {
      case "glassJoe":
        opponent = new GlassJoe(data.opponentSpriteSheet, 310, 200, 90, 220);
        break;
      case "vonKaiser":
        opponent = new VonKaiser(data.opponentSpriteSheet, 310, 200, 90, 220);
        break;
      default:

    }


    const littleMac = new LittleMac(data.macSpriteSheet, 320, 300, 72, 161);
    // const glassJoe = new GlassJoe(data.joeSpriteSheet, 310, 200, 90, 220);
    const refMario = new RefMario(data.refSpriteSheet, 500, 200, 75, 120);

    data.background = background;
    data.littleMac = littleMac;
    data[data.currentOpponent]= opponent;
    data.refMario = refMario;
  }
}



export default Display;
