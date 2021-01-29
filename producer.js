const mqtt= require('mqtt');
const client_mqtt = mqtt.connect('mqtt://test.mosquitto.org');

let kafka = require('kafka-node');
let Producer = kafka.Producer;
let KeyedMessage = kafka.KeyedMessage;
let client_kafka = new kafka.KafkaClient();
let producer = new Producer(client_kafka);
let km = new KeyedMessage('key', 'message');
let payloads;


client_mqtt.subscribe('test');

client_mqtt.on('message', function(topic, message) {
  console.log("토픽명 : "+ topic.toString() + ' and 들어오는 메시지:' + message.toString());
  payloads =  [{ topic: 'GameLog', messages: `${message.toString()}`, partition: 0 }];


      producer.send(payloads, function (err, data) {
          console.log(data);
      });

});


//이렇게 하면 일단 기본적인 보내기는 된다.
