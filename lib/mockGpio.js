'use strict';

/**
 * Mock Gpio for developement on desktop.
 *
 *
 */
class MockGpio {
  constructor (){
  }

  writeSync (flag){
    console.info(`MOCK GPIO:: WriteSync called with flag = ${flag}`);
  }

  readSync (){
    console.info('MOCK GPIO:: ReadSync called');
    return 0;
  }

  pwmWrite (d){
    console.info('MOCK PGPIO' + d);
  }
}


module.exports = MockGpio;
