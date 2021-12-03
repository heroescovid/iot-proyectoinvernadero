import dash
from   dash import dcc
from   dash import html
from   dash.dependencies import Input,Output,State
import dash_mqtt
app = dash.Dash(__name__)
app.layout = html.Div([
    dash_mqtt.DashMqtt(
        id = "mqtt",
        broker_url  = "broker.emqx.io",
        broker_port = 8083,
        broker_path = "mqtt",
        topics = ["iot-lab/temperatura/A"]
    ),
    html.Center([
        html.H1("Iot-Dashboards")
    ]),
    html.P("MQTT echo server to " + "EMQX IO BROKER" + ' on port ' + "1883"),
    dcc.Input(
        id = "message_to_send",
        placeholder = "message to send",
        debounce = True        
    ),
    html.Button("Send",id = "send"),
    html.Div(id = "return menssage")
])
if __name__ == "__main__":
    app.run_server("0.0.0.0",3021,debug = True)    