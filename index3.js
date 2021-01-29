


// mqtt 테스트 2

const mqtt= require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

var options = {
  retain:true,
  qos:1
};


setInterval(()=>{

  client.publish('ttss','index3의 message', options);

}, 3000);
