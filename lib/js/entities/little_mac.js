import Sprite from './sprite';

class LittleMac{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 26, 29, 52, 131);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

export default LittleMac;
