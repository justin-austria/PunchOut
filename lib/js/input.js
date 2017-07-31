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

    switch (e.key) {
      case "a":
        console.log("left jab");
        this.animationRunning = true;
        this.down["a"] = true;
        console.log(this.down);
        setTimeout(() => {
          this.down["a"] = false;
          this.animationRunning = false;
          console.log(this.down);
        }, 250);

        break;
      case "d":
        console.log("right jab");
          break;
      case "j":
        console.log("left dodge");
          break;
      case "l":
        console.log("right dodge");
          break;
      case " ":
        console.log("get up!");
          break;
      default:
    }
    })
  }

  update() {

  }


}

export default Input;
