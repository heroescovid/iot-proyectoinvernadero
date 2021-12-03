var mqtt_esp32 = require("mqtt");
var fs_fronten = require("fs");
var express_fr = require("express");
var { Server } = require("socket.io");
var app_fronte = express_fr();
var server_fro = app_fronte.listen(3000);
var io_fronten = new Server(server_fro);
const option_mqtt = {
    clean: true, 
  connectTimeout: 4000, 
  clientId: "iot-dashboard",
  username: "iot-lab",
  password: "iot-lab2020",
};
const cliente_esp32 = mqtt_esp32.connect("ws://j95115cc-internet-facing-e6ac98c59cf67ad9.elb.eu-west-1.amazonaws.com:8083/mqtt",option_mqtt);
app_fronte.use(express_fr.static(__dirname + "/public"));
app_fronte.get("/", function (req,res) {
  fs_fronten.readFile(__dirname + "/public/index.html",function(error,data) {
    if (error) {
      res.writeHead(404);
      res.write("Not Found");
      res.end();
    } 
    else {
      res.writeHead(200);
      res.write(data,"utf8");
      res.end();
    }
  });
});
io_fronten.sockets.on("connection",function(socket) {
    console.log("Conexión realizda exitosamente con el frontend");
});
cliente_esp32.on("connect",()=>{
    console.log("conectado exitosamente al servidor en la nube princpal");
    cliente_esp32.subscribe("iot-lab/invernadero1/sensores/humedad_rel/a");
    cliente_esp32.subscribe("iot-lab/invernadero1/sensores/temperatura/a");
    cliente_esp32.publish("iot-lab/invernadero1/actuadores/bombas/a",'{estado:"1"time":"25"}');
});
cliente_esp32.on("error", (error) => {
    console.log("Connection failed:",error);
});
cliente_esp32.on("message",(topic,message)=>{
    console.log(topic + ":" + message.toString());
    if(topic == "iot-lab/invernadero1/sensores/temperatura/a") {
        io_fronten.sockets.emit("temperatura",{raw:message.toString()});
    }
    if(topic == "iot-lab/invernadero1/sensores/humedad_rel/a") {
        io_fronten.sockets.emit("humedad_rel",{raw:message.toString()});
    }
});
console.log("Conectando con el frontend");
console.log("Sistema embebido realizado");