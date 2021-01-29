
const express = require('express');
const app = express();
const port = 5050;
const mqtt= require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

let result = 0;


client.subscribe('ttss');

client.on('message', function(topic, message) {
  console.log("토픽명 : "+ topic.toString() + ' and 들어오는 메시지:' + message.toString());
  //client.end(); 이걸 활성화 시키면 메시지를 받고 disconnect가 된다.
  result=  message.toString();
});

app.get('/', (req, res)=>{

    res.send(`${result}`);

});



app.listen(port, ()=>{
  console.log('go go');
})
