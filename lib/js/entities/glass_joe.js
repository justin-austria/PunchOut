import Sprite from './sprite';

class GlassJoe{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 26, 29, 80, 200);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

export default GlassJoe;
