const Animation = {
  update: function(data) {
    Animation.glassJoe(data);
    Animation.littleMac(data);
    Animation.refMario(data);
  },

  glassJoe: function(data) {
    console.log(data.glassJoe.currentState);
    data.glassJoe.currentState.animation(data);
  },

  littleMac: function(data) {
    data.littleMac.currentState.animation(data);
  },

  refMario: function(data) {
    data.refMario.currentState.animation(data);
  }
};

export default Animation;
