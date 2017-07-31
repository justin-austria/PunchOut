const Animation = {
  update: function(data) {
    Animation.glassJoe(data);
  },

  glassJoe: function(data) {
    const newData = Object.assign({}, data);

    data.glassJoe.currentState.animation(data);

  }
};

export default Animation;
