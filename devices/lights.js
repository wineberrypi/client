'use strict';

const Device = require('./device');

const { lightsConfig } = require('../config');
const gpio = require('../lib/gpio');

const lights = {};

Object
  .keys(lightsConfig)
  .forEach((name) => {
    const lightConfig = lightsConfig[name];
    const pin = lightConfig.pin;

    if (pin){
      const light = new Device(gpio, pin);
      lights[name] = light;
    } else {
      console.warn(`Pin is required for light - ${name}`);
    }
  });

module.exports = lights;
