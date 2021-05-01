const http = require('http');
const mqtt= require('mqtt');
// initialize the request

var client = mqtt.connect("http://broker.hivemq.com",{clientid:"mqttjs01_giucas_casella"})

// Automatically update sensor value every 2 seconds
//we use a nested function (function inside another function)
setInterval(function() {
   
    const data = JSON.stringify({
        'sensor': 'ID1',
        'timestamp': 12345678,
        'temperature': Math.random(0,40)
    })


    client.publish("test-topic-handson/era lillo",data);

}, 2000);
