const Gpio = require('onoff').Gpio;
const leds = require('./../models/leds');

module.exports = app => {

  const led0 = new Gpio(leds[0].gpio, 'out');
  const led1 = new Gpio(leds[1].gpio, 'out');
  const led2 = new Gpio(leds[2].gpio, 'out');
  const led3 = new Gpio(leds[3].gpio, 'out');
  const led4 = new Gpio(leds[4].gpio, 'out');
  const led5 = new Gpio(leds[5].gpio, 'out');

  const ledArray = [led0, led1, led2, led3, led4, led5];

  ledArray.forEach( value => {
    value.writeSync(1);
  })

};

  


