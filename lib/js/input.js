//TODO: Lock input while animation running?

class Input {
  constructor(data) {

    this.validInputs = ["a","A","d","D","j","J","l","L"," "]

    data.animationRunning = false;

    // data.keyLock = false;
    //
    // window.addEventListener('keyup', (e) => {
    //   data.keyLock = false;
    // })

    window.addEventListener('keydown', (e) => {
      if (this.validInputs.includes(e.key)) {
        switch (e.key) {
          case 'a':
          case 'A':
          case 'd':
          case 'D':
            this.animationLength = 400;
            break;
          case 'j':
          case 'J':
          case 'l':
          case 'L':
            this.animationLength = 300;
            break;
          default:
        }

        if (data.animationRunning === false) {
          data.keyPress = e.key;
        }

        setTimeout(() => {
          data.keyPress = false;
        }, 50)
        setTimeout(() => {
          data.animationRunning = false;
          this.resetEntityPosition(data);

        }, this.animationLength);
      }
    })
  }

  resetEntityPosition(data) {
    data.littleMac.x = 320;
  }

  keyUpdate(data) {
    // if (data.keyLock === true) {
    //   return false
    // }

    if (!data.animationRunning) {
        switch (data.keyPress) {
        case "a":
        case "A":
          data.animationRunning = true;
          if (data.entityFrame.littleMac > 30) {
             data.entityFrame.littleMac = 0;
          }
          data.littleMac.currentState = data.littleMac.states.leftJab;

          if (data.glassJoe.currentState.name === "idle") {
            data.glassJoe.currentState = data.glassJoe.states.isBlocking;
          } else if (data.glassJoe.currentState.name === "prep") {
              data.glassJoe.currentState = data.glassJoe.states.isHit;
          }
          break;
        case "d":
        case "D":
          console.log("right jab!")
          break;
        case "j":
        case "J":
          if (data.entityFrame.littleMac > 20) {
             data.entityFrame.littleMac = 0;
          }
            data.littleMac.currentState = data.littleMac.states.leftDodge;
          break;
        case "l":
        case "L":
          console.log("right dodge!")
          break;
        case " ":
          console.log("get up!")
          break;
        default:
          data.littleMac.currentState = data.littleMac.states.idle;
      }
    }
  }


}

export default Input;
