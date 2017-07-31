import Background from './entities/background';
import LittleMac from './entities/little_mac';
import GlassJoe from './entities/glass_joe';
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

    const littleMac = new LittleMac(data.macSpriteSheet, 324, 320, 52, 131);
    const glassJoe = new GlassJoe(data.joeSpriteSheet, 300, 200, 90, 220);
    const refMario = new RefMario(data.refSpriteSheet, 500, 200, 75, 120);

    data.background = background;
    data.littleMac = littleMac;
    data.glassJoe = glassJoe;
    data.refMario = refMario;
  }
}



export default Display;
