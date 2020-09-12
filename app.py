from flask import Flask, render_template, jsonify
import csv

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ml_predictions")
def ML_page():
    return "X"

@app.route("/leaflet")
def leaflet_page():
    return "X"

@app.route("/data")
def data_page():
    return "X"

@app.route("/about_us")
def about_us():
    return render_template("about_us.html")

if __name__ == "__main__":
    app.run(debug=True)
