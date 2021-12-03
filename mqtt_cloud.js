var mqtt_esp32 = require("mqtt");
const option_mqtt = {
  	clean: true, 
    connectTimeout: 4000, 
    clientId: "iot-dashboard",
    username: "iot-lab",
    password: "iot-lab2020",
};
const cliente_esp32 = mqtt_esp32.connect("ws://j95115cc-internet-facing-e6ac98c59cf67ad9.elb.eu-west-1.amazonaws.com:8083/mqtt",option_mqtt);
cliente_esp32.on("connect",()=>{
    console.log("conectado exitosamente al servidor en la nube princpal");
    cliente_esp32.subscribe("iot-lab/invernadero1/sensores/temperatura/a");
    cliente_esp32.publish("iot-lab/invernadero1/actuadores/bombas/a",'{estado:"1"time":"25"}');
});
cliente_esp32.on("error", (error) => {
    console.log("Connection failed:",error);
});
cliente_esp32.on("message",(topic,message)=>{
    console.log("receive message of topic " + topic + ":" + message.toString());
});