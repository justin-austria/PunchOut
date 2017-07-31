class Render {
  constructor(data) {
    this.drawEntity(data.background, data.canvas.ctxBot);
    this.drawEntity(data.glassJoe, data.canvas.ctxMid);
    this.drawEntity(data.refMario, data.canvas.ctxMid);
    this.drawEntity(data.littleMac, data.canvas.ctxTop);
  }

  drawEntity(entity, ctx) {
    ctx.clearRect(0, 0, 648, 479);
    ctx.drawImage(entity.sprite.img,
                    entity.sprite.srcX, entity.sprite.srcY,
                    entity.sprite.srcW, entity.sprite.srcH,
                    entity.x, entity.y,
                    entity.w, entity.h)
  }

  update(data) {
    this.drawEntity(data.glassJoe, data.canvas.ctxMid);
    this.drawEntity(data.littleMac, data.canvas.ctxTop);
  }


}

export default Render;
