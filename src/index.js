import SmartHouse from './components/smart-house';
import Iron from './components/iron';
import Oven from './components/oven';

const house = new SmartHouse('smart house');
const iron = new Iron('iron', 2, true);
const oven = new Oven('oven');
const anotherIron = new Iron('iron', 3, true);

house.addDevice(iron);
house.addDevice(anotherIron);
house.addDevice(oven);

// const ironID = house.getIdOfDevice(iron);
// console.log(house.getIdOfMachine(iron));
// house.getDeviceById(ironID).addWater();
// house.getMachineById(ironID).addWater();
// console.log('water level', house.getMachineById(ironID).waterLevel);
// console.log(oven);
// const ovenID = house.getIdOfDevice(oven);
// house.getDeviceById(ovenID).temperature = 200;
// house.deleteMachineById(ironId);
// console.log("machinesList", house.machinesList);
// house.onAllMachines();
// house.offAllMachines();
console.log('house', house);
