class Device {
    constructor(name) {
      this._state = false;
      this._name = name;
      this._temperature = 0;
    }
  
    on() {
      this._state = true;
    }
    off() {
      this._state = false;
    }
    get state() {
      return this._state;
    }
    get name() {
      return this._name;
    }
    get temperature() {
      return this._temperature;
    }
  }

  export default Device;
  