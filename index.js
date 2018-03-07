'use strict';


const mqtt = require('./lib/mqtt');


/**
 *----------------------------------------------
 * Light Starts
 *----------------------------------------------
 */
const lights = require('./devices/lights');
const lightsTopic = '/lights';

const lightsHandler = (topic, message) => {
  // message is a buffer
  const messageStr = message.toString();
  const messageObj = JSON.parse(messageStr);

  const id = messageObj.id;
  const action = messageObj.action;

  const light = lights[id];


  if(light){
    light[action].call(light);
  }else{
    // Error handling if light with provided id does not exist.
    console.error('Light with id=${id} is not found.');
  }
};

mqtt.subscribe(lightsTopic);
mqtt.handleMessage(lightsTopic, lightsHandler);


/**
 *----------------------------------------------
 * Light Ends
 *----------------------------------------------
 */

/**
 *----------------------------------------------
 * LED Starts
 *----------------------------------------------
 */
const led = require('./devices/led');
const ledTopic = '/led';

const ledHandler = (topic, message) => {
  // message is a buffer
  const messageStr = message.toString();
  const messageObj = JSON.parse(messageStr);

  const id = messageObj.id;
  const action = messageObj.action;

  const light = lights[id];


  if(action == "on"){
    led.on();
  }else if(action == "off"){
    led.off();
  }else if(action == "fade"){
    led.fade();
  }else if(action == "color"){
    console.log(messageObj)
    const colors  = messageObj.color.split(',');
    led.setColor(colors);
  }

};

mqtt.subscribe(ledTopic);
mqtt.handleMessage(ledTopic, ledHandler);


/**
 *----------------------------------------------
 * LED Ends
 *----------------------------------------------
 */
