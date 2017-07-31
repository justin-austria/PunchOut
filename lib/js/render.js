class Render {
  constructor(data) {
    this.drawEntity(data.background, data.canvas.ctxBot);
    this.drawEntity(data.glassJoe, data.canvas.ctxMid);
    this.drawEntity(data.refMario, data.canvas.ctxMid);
    this.drawEntity(data.littleMac, data.canvas.ctxTop);
  }

  drawEntity(entity, ctx) {
    ctx.drawImage(entity.sprite.img,
                    entity.sprite.srcX, entity.sprite.srcY,
                    entity.sprite.srcW, entity.sprite.srcH,
                    entity.x, entity.y,
                    entity.w, entity.h)
  }


}

export default Render;
