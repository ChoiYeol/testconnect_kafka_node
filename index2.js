


// mqtt 테스트 1

const mqtt= require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');


setInterval(()=>{

  client.publish('test','index2의 message');

}, 3000);
