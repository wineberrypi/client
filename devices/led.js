'use strict';

const Device = require('./device');

const { ledConfig } = require('../config');

const Gpio = require('../lib/pigpio');

class LED {
  constructor(r, b, g){
    if(!(r && b && g)){
      throw new Exception('RBG pin values are required.');
    }
    this.rPin = new Gpio(r, {mode: Gpio.OUTPUT});;
    this.bPin = new Gpio(b, {mode: Gpio.OUTPUT});;
    this.gPin = new Gpio(g, {mode: Gpio.OUTPUT});;
  }

  on(){
    this.reset();
    this.rPin.pwmWrite(255);
    this.bPin.pwmWrite(255);
    this.gPin.pwmWrite(255);
  }

  off(){
    this.reset();
    this.rPin.pwmWrite(0);
    this.bPin.pwmWrite(0);
    this.gPin.pwmWrite(0);
  }

  reset(){
    if(this.fadeInterval){
      clearInterval(this.fadeInterval);
    }
  }

  setColor(colors){
    this.rPin.pwmWrite(colors[0]);
    this.gPin.pwmWrite(colors[1]);
    this.bPin.pwmWrite(colors[2]);
  }

  fade(){
    this.reset();
    var r=255,g=0,b=0;
    const that = this;

    this.fadeInterval =   setInterval(function(){
      if(r > 0 && b == 0){
        r--;
        g++;
      }
      if(g > 0 && r == 0){
        g--;
        b++;
      }
      if(b > 0 && g == 0){
        r++;
        b--;
      }

      that.setColor([r, g, b]);
    },10);

  }

}

const { r, b, g } = ledConfig.pin;
const led = new LED(r, b, g);

module.exports = led;
