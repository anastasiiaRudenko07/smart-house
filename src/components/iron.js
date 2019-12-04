import Device from './device';

class Iron extends Device {
    constructor(name, temperature, steamerOn) {
      super(name, temperature);
      this._temperatureMin = 0;
      this._temperatureMax = 3;
      this._steamerOn = steamerOn;
      this._waterLevel = 0;
      this._waterLevelMax = 2;
    }
  
    increaseTemperature() {
      if (this._temperature >= this._temperatureMax) {
        return;
      }
      this._temperature = ++this._temperature;
    }
    decreaseTemperature(){
      if (this._temperature <= this._temperatureMin) {
        return;
      }
      this._temperature = --this._temperature;
    }
  
    handleSteamer() {
      this._steamerOn = !this._steamerOn;
    }
    get steamerOn() {
      return this._steamerOn;
    }
  
    get waterLevel() {
      return this._waterLevel;
    }
    addWater() {
      if (this._waterLevel < this._waterLevelMax) {
        this._waterLevel++;
      }
    }
  }

  export default Iron;
