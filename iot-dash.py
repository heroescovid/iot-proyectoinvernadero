import dash
from   dash import dcc
from   dash import html
import plotly.express as px
import pandas as pd
app = dash.Dash(__name__)
df = pd.DataFrame({
    "Sectors": ["Humidity A", "Humidity B", "Humidity C", "Temperature A", "Temperature B", "Temperature C"],
    "Value": [40,10,20,16,4,8],
    "Sensors": ["Humidity","Humidity","Humidity","Temperature","Temperature","Temperature"]
})
fig = px.bar(df,x = "Sectors",y = "Value",color = "Sensors",barmode = "group")
app.layout = html.Div(children = [
    html.H1(children="IoT-Dashboard"),
    html.Div(children='''
        Dash: A web application framework for your data.
    '''),
    dcc.Graph(
        id = "example-graph",
        figure = fig
    )
])
if __name__ == "__main__":
    app.run_server("0.0.0.0",2020,debug = True)