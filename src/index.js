import SmartHouse from './components/smart-house';
import Iron from './components/iron';
import Oven from './components/oven';

const house = new SmartHouse('smart house');
const iron = new Iron('iron', 2, true);
const oven = new Oven('oven');

house.addDevice(iron);
house.addDevice(oven);

console.log('house', house);
