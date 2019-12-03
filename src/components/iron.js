import Device from './device';

class Iron extends Device {
    constructor(name, temperature, steamerOn) {
      super(name, temperature);
      this._steamerOn = steamerOn;
      this._waterLevel = 0; // 0, 1, 2
    }
  
    increaseTemperature() {
      if (this._temperature >= 3) {
        return;
      }
      this._temperature = ++this._temperature;
    }
    decreaseTemperature(){
      if (this._temperature <= 1) {
        return;
      }
      this._temperature = --this._temperature;
    }
  
    handleSteamer() {
      if (this._steamerOn) {
        this._steamerOn = false;
      } else {
        this._steamerOn = true;
      }
      // this._isSteamerOn = !this._isSteamerOn;
    }
    get steamerOn() {
      return this._steamerOn;
    }
  
    get waterLevel() {
      return this._waterLevel;
    }
    addWater() {
      if (this._waterLevel < 2) {
        this._waterLevel++;
      }
    }
  }

  export default Iron;
