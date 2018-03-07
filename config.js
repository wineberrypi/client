'use strict';

module.exports = {
  mqttConfig: {
    host: '' // host name of server
  },
  lightsConfig: {
    lamp: {   // pin configs for lamp. Eg pin 14 will toggle a connected lamp.
      pin: 14
    }
  },
  ledConfig: {  // pin config for RGB led strip. Example config  r:27, b:17, g:15.
    pin: {
      r: 27,
      b: 17,
      g: 15
    }
  }
};
