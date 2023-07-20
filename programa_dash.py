from flask import Flask,render_template,url_for,request,jsonify
from flask_cors import CORS
app = Flask(__name__)
app.route("/")
def index():
    return render_template("index.html")
app.route("/registro")
def reigstro():
    return render_template(reigstro.html)
app.route("/tablas")
def tablas():
    return render_template("tablas.html")
app.run("0.0.0.0",port = 8897,debug = False)