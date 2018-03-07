'use strict';

const mqttJs = require('mqtt');
const { mqttConfig } = require('../config');
const mqttHost = mqttConfig.host;

class Mqtt{

  constructor (host){
    this.client = mqttJs.connect(`mqtt://${host}`);
    this.messageHandler = {};
    this.client.on('connect', () => {
      console.log('Connected to MQTT server.');
    });
    this.client.on('message', this.onMessage.bind(this));
  }

  subscribe (topic){
    this.client.subscribe(topic); 
  }

  publish (topic, message){
    this.client.publish(topic, message);
  }

  onMessage (topic, message){
    const handler = this.messageHandler[topic];
    handler && handler(topic, message);
  }

  handleMessage (topic, handler){
    this.messageHandler[topic] = handler;
  }

}

const mqtt = new Mqtt(mqttHost);

module.exports = mqtt;
