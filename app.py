import pandas as pd,requests,paho.mqtt.client as mqtt
from flask import Flask,request,jsonyfy,render_template,url_for
from flask_cors import CORS
app = Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")
@app.route("/excel_tablas")
def excel_tablas():
    return render_template("excel.html")
@app.route("api/datos",methods = ["POST"])
def datos():
    return render_template("datos.html")
@app.route("/api/get_datos",methods = ["GET"])
def get_datos():
    return ""
@app.route("/formulario")
def formulario():
    return ""
app.run("0.0.0.0",port = 8897,debug = False)