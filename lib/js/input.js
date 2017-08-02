//TODO: Lock input while animation running?

class Input {
  constructor(data) {

    this.validInputs = ["a","A","d","D","j","J","l","L"," "]

    data.animationRunning = false;

    window.addEventListener('keyup', (e) => {

      this.fired = false;

    })

    window.addEventListener('keydown', (e) => {
      if (this.fired) {
        return false
      }
      this.fired = true

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
          data.littleMac.currentState = data.littleMac.states.idle;
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
          if (data.littleMac.energyCount > 0) {

            data.littleMac.currentState = data.littleMac.states.leftJab;

            if (data.glassJoe.currentState.name === "idle") {
              data.glassJoe.currentState = data.glassJoe.states.isBlocking;
            } else if (data.glassJoe.currentState.name === "prep") {
                data.glassJoe.currentState = data.glassJoe.states.isHit;
            }

            data.littleMac.energyCount--;
            data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
            data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
          } else {
            data.littleMac.currentState = data.littleMac.states.noEnergy;
          }
          break;
        case "d":
        case "D":
        if (data.littleMac.energyCount > 0) {
          data.animationRunning = true;
            if (data.entityFrame.littleMac > 30) {
               data.entityFrame.littleMac = 0;
            }
            data.littleMac.currentState = data.littleMac.states.rightJab;

            if (data.glassJoe.currentState.name === "idle") {
              data.glassJoe.currentState = data.glassJoe.states.isBlocking;
            } else if (data.glassJoe.currentState.name === "prep") {
                data.glassJoe.currentState = data.glassJoe.states.isHit;
            }
            if (data.littleMac.energyCount > 0) {
              data.littleMac.energyCount--;
              data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
              data.littleMac.energyMeter.removeChild(data.littleMac.energyMeter.lastChild);
            }
          }
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
          if (data.entityFrame.littleMac > 20) {
             data.entityFrame.littleMac = 0;
          }
            data.littleMac.currentState = data.littleMac.states.rightDodge;
          break;
        case " ":
          console.log("get up!")
          break;
        default:
      }
    }
  }


}

export default Input;
