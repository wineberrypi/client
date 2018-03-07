'use strict';


class Device{

  /**
   * Gpio: gpio library.
   * pin : Integer - gpio pin no.
   * type: in/out. Default out.
   *
   * */
  constructor (Gpio, pin, type = 'out'){
    if (!Gpio){
      throw new Error('Please provide a valid GPIO.');
    }
    if (!pin){
      throw new Error('Please provide a pin no.');
    }
    this.pin = pin;
    this.gpio = new Gpio(pin, type);
  }

  on (){
    console.log('Device is on.');
    this.gpio.writeSync(0);
  }

  off (){
    console.log('Device is off.');
    this.gpio.writeSync(1);
  }

  toggle (){
    console.log('Device is toggled.');
    // Check status undifined.
    const status = this.gpio.readSync();
    this.gpio.writeSync(+!status);
  }

  status (){
    return this.gpio.readSync();
  }
}

module.exports = Device ;
