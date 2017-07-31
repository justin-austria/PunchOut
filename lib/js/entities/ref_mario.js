import Sprite from './sprite';

class RefMario{
  constructor(img, x, y, w, h){
    this.sprite = new Sprite(img, 0, 0, 50, 75);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

export default RefMario;
