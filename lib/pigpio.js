'use strict';

const MockGpio = require('./mockGpio');

let Gpio;

try {
  Gpio = require('pigpio').Gpio;
} catch (e){
  console.warn('Raspberry device not found. Mocking device.');
  Gpio = MockGpio;  // Mock for desktop developement
}


module.exports = Gpio;
