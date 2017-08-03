const Animation = {
  update: function(data) {
    Animation[data.currentOpponent](data);
    Animation.littleMac(data);
    Animation.refMario(data);
  },

  glassJoe: function(data) {
    data.glassJoe.currentState.animation(data);
  },

  vonKaiser: function(data) {
    data.vonKaiser.currentState.animation(data);
  },

  littleMac: function(data) {
    data.littleMac.currentState.animation(data);
  },

  refMario: function(data) {
    data.refMario.currentState.animation(data);
  }
};

export default Animation;
