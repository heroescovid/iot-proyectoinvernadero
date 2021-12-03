import dash
from    dash import html
from    dash import dcc
app = dash.Dash(__name__)
print("Holis a todos !!")
if __name__ == "__main__":
    app.run_server("0.0.0.0",5050,debug = True)