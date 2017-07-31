class Input {
  constructor() {

    this.down = {
      "a": false,
      "d": false,
      "j": false,
      "l": false,
      " ": false
    }

    this.animationRunning = false;

    window.addEventListener('keydown', (e) => {
    let animationLength;
    this.animationRunning = e.key;
    if (Object.keys(this.down).includes(e.key)) {
      // console.log(this.animationRunning);
      animationLength = 400;

      this.down[e.key] = true;
      setTimeout(() => {
        this.down[e.key] = false;
        this.animationRunning = false;
        // console.log(this.animationRunning);
      }, animationLength);
    }
    })
  }

  keyUpdate(data) {

    switch (this.animationRunning) {
      case "a":
        // data.entityFrame.littleMac = 0;
        
        data.littleMac.currentState = data.littleMac.states.leftJab;

        // console.log(data.animationFrame);

        console.log("left jab!");
        break;
      case "d":
        console.log("right jab!")
        break;
      case "j":
        console.log("left dodge!")
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
    }
  }


}

export default Input;
