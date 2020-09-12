from flask import Flask, render_template, jsonify
import csv

app = Flask(__name__)

@app.route("/")
def index():
    return "X"

@app.route("/machine_learning")
def ML_page():
    return "X"

@app.route("/leaflet")
def Leaflet_page():
    return "X"

@app.route("/data")
def data_page():
    return "X"

@app.route("/about_us")
def about_us():
    return "X"

if __name__ == "__main__":
    app.run(debug=True)
