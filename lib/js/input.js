class Input {
  constructor(data) {

    this.down = {
      "a": false,
      "d": false,
      "j": false,
      "l": false,
      " ": false
    }

    this.animationRunning = false;

    window.addEventListener('keydown', (e) => {
    this.animationLength;
    this.animationRunning = e.key;
    if (Object.keys(this.down).includes(e.key)) {
      switch (e.key) {
        case 'a':
        case 'd':
          this.animationLength = 1000;
          break;
        case 'j':
        case 'l':
          this.animationLength = 300;
          break;
        default:

      }
      this.down[e.key] = true;
      setTimeout(() => {
        this.down[e.key] = false;
        this.animationRunning = false;
        this.resetEntityPosition(data);
      }, this.animationLength);
    }
    })
  }

  resetEntityPosition(data) {
    data.littleMac.x = 320;
  }

  keyUpdate(data) {


    switch (this.animationRunning) {
      case "a":
        if (data.entityFrame.littleMac > 20) {
           data.entityFrame.littleMac = 0;
        }
        data.littleMac.currentState = data.littleMac.states.leftJab;
        data.glassJoe.currentState = data.glassJoe.states.isHit;
        break;
      case "d":
        console.log("right jab!")
        break;
      case "j":
        if (data.entityFrame.littleMac > 20) {
           data.entityFrame.littleMac = 0;
        }
          data.littleMac.currentState = data.littleMac.states.leftDodge;
        break;
      case "l":
        console.log("right dodge!")
        break;
      case " ":
        console.log("get up!")
        break;
      default:
      // if (data.animationFrame % 10 === 0) {
      //   console.log(data.animationFrame);
      // }
        data.littleMac.currentState = data.littleMac.states.idle;
        data.glassJoe.currentState = data.glassJoe.states.idle;
    }
  }


}

export default Input;
