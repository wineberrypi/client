'use strict';

const MockGpio = require('./mockGpio');

let Gpio;

try {
  const onoff = require('onoff');
  Gpio = onoff.Gpio;
} catch (e){
  console.warn('Raspberry device not found. Mocking device.');
  Gpio = MockGpio;  // Mock for desktop developement
}


module.exports = Gpio;
