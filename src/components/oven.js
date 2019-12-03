import Device from './device';

class Oven extends Device {
    constructor(name) {
      super(name);
      this._timer = 0; // 1-300
      this._lampOn = false;
      this._modes = ["standart", "grill", "defrosting"];
      this._currentMode = 0;
      this._isReady = false;
    }
  
    off() {
      super.off();
      this._isReady = false;
    }
  
    set temperature(temperature) {
      if (temperature >= 1 && temperature <= 250) {
        setTimeout(() => {
          this._temperature = temperature;
        }, 1000);
      }
    }
  
    get timer() {
      return this._timer;
    }
    set timer(time) {
      if (time >= 1 && time <= 30000) {
        this._timer = time;
      }
    }
  
    handleLamp() {
      if (this._lampOn) {
        this._lampOn = false;
      } else {
        this._lampOn = true;
      }
      // this._lampOn = !this._lampOn;
    }
    get lampOn() {
      return this._lampOn;
    }
  
    get currentMode() {
      return this._modes[this._currentMode];
    }
    nextMode() {
      this._currentMode++;
      if (this._currentMode == this._modes.length) {
        this._currentMode = 0;
      }
    }
    previousMode() {
      if (this._currentMode == 0) {
        this._currentMode = this._modes.length;
      }
      this._currentMode--;
    }
    run() {
      if(this._temperature && this._timer) {
        return new Promise((resolve) => {
          setTimeout(() => {
            this._isReady = true;
            resolve();
          }, this._timer);
        });
      }
    }
    runMode() {
      switch(this._currentMode) {
        case 0: 
          this._temperature = 180;
          this._timer = 30;
          this.run();
          break;
        case 1: 
          this._temperature = 200;
          this._timer = 50;
          this.run();
          break;
        case 2: 
          this._temperature = 30;
          this._timer = 30;
          this.run();
          break;
        default:
          this._temperature = 150;
          this._timer = 10;
          this.run();
          break;
      }
    }
  }

  export default Oven;
