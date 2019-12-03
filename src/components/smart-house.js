import Device from './device';

class SmartHouse {
    constructor(name) {
      this._name = name;
      this._devicesList = new Map();
    }
    get name() {
      return this._name;
    }
    set name(name) {
      if (typeof name === 'string' && name.length > 0) {
        this._name = name;
      }
    }
    
    // I did insistent recommendation to create a function validating devices by name,
    // but I suppose that the mentioned function is useless for my project, 
    // because I use id-based system of identifying devices unlike name-based.

    // _validateDeviceByName(name) {
    //   const foundDevice = [...this._devicesList.values()].find((item) => {
    //     return name.toLowerCase() === item.name.toLowerCase();
    //   });
    //   return foundDevice === undefined;
    // }
    addDevice(device) {
      if (device instanceof Device /*&& this._validateDeviceByName(device.name)*/) {
        const id = Math.floor(Math.random() * 100000000 + 1);
        this._devicesList.set(id, device);
      }
    }
    get devicesList() {
      const list = [];

      for (let item of this._devicesList.values()) {
        list.push(item.name);
      }
  
      return list;
    }
    getIdOfDevice(device) {
      const foundSet = [...this._devicesList.entries()].find(([, value]) => {
        return value === device;
      });

      return foundSet ? foundSet[0] : undefined;
    }
    getDeviceById(id) {
      return this._devicesList.get(id);
    }
    deleteDeviceById(id) {
      this._devicesList.delete(id);
    }
    deleteAllDevices() {
      this._devicesList.clear();
    }
    onAllDevices() {
      this._devicesList.forEach((value) => {
        value.on();
      })
    }
    offAllDevices() {
      this._devicesList.forEach((value) => {
        value.off();
      })
    }
  }

  export default SmartHouse;
  