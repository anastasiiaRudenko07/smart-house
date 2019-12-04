import Device from './device';

class Oven extends Device {
    constructor(name) {
      super(name);
      this._temperatureMin = 0; /*degrees celsius*/
      this._temperatureMax = 250;
      this._timer = 0; /*in milliseconds */
      this._timerMin = 1;
      this._timerMax = 7200000; /*2 hours*/
      this._lampOn = false;
      this._modes = ["standart", "grill", "defrosting"];
      this._currentMode = "standart";
      this._isReady = false;
    }
  
    off() {
      super.off();
      this._isReady = false;
    }
  
    set temperature(temperature) {
      if (temperature > this._temperatureMin && temperature <= this._temperatureMax) {
        this._temperature = temperature;
      }
    }
  
    get timer() {
      return this._timer;
    }
    set timer(time) {
      if (time >= this._timerMin && time <= this._timerMax) {
        this._timer = time;
      }
    }
  
    handleLamp() {
      this._lampOn = !this._lampOn;
    }
    get lampOn() {
      return this._lampOn;
    }
  
    get currentMode() {
      return this._modes[this._currentMode];
    }
    nextMode() {
      const indexCurrentMode = this._modes.indexOf(this._currentMode);

      if (indexCurrentMode  === this._modes.length - 1) {
        this._currentMode = this._modes[0];
      } else {
        this._currentMode = this._modes[indexCurrentMode + 1];        
      }
      // this._currentMode = this._modes[indexCurrentMode + 1];
      // this._currentMode++;
      // if (this._currentMode === this._modes.length) {
      //   this._currentMode = 0;
      // }
    }
    previousMode() {
      const indexCurrentMode = this._modes.indexOf(this._currentMode);

      if (indexCurrentMode  === 0) {
        this._currentMode = this._modes[this._modes.length - 1];
      } else {
        this._currentMode = this._modes[indexCurrentMode - 1]; 
      }
      // if (this._currentMode == 0) {
      //   this._currentMode = this._modes.length;
      // }
      // this._currentMode--;
    }
    run() {
      if(this._temperature && this._timer) {
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, this._timer);
        }).then(() => {
          this._isReady = true;
        });
      }
    }
    runMode() {
      switch(this._currentMode) {
        case "standart": 
          this._temperature = 180;
          this._timer = 1800000; /*30 min*/
          this.run();
          break;
        case "grill": 
          this._temperature = 200;
          this._timer = 2400000; /*40 min*/
          this.run();
          break;
        case "defrosting": 
          this._temperature = 30;
          this._timer = 1800000; /*30 min*/
          this.run();
          break;
        default:
          this._temperature = 150;
          this._timer = 600000; /*10 min*/
          this.run();
          break;
      }
    }
  }

  export default Oven;
