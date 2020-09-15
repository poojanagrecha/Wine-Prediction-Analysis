from flask import Flask, request, Response, render_template, jsonify, send_file
import json
import numpy as np
import pandas as pd
import pickle

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ml_predictions")
def ML_page():
    return render_template('machine_learning.html')

@app.route("/tableau1")
def tableau1_page():
    return render_template("tableau_exploration.html")

@app.route("/tableau2")
def tableau2_page():
    return render_template("tableau2.html")

@app.route("/tableau3")
def tableau3_page():
    return render_template("tab3.html")

@app.route("/data")
def data_page():
    return render_template("data_exploration.html")

@app.route("/about_us")
def about_us():
    return render_template("about_us.html")

@app.route('/getPrediction/', methods=['POST'])
def getPredictions():
    content = request.json["data"]
    thing1 = content["thing1"]
    thing2 = content["thing2"]
    thing3 = content["thing3"]
    thing4 = content["thing4"]
    thing5 = content["thing5"]
    thing6 = content["thing6"]

    data_test = [[thing1,thing2,thing3,thing4,thing5,thing6]]

    loaded_scaler = pickle.load(open('models/finalized_scaler.sav', 'rb'))
    loaded_model = pickle.load(open('models/finalized_model.sav', 'rb'))

    newData_scaled = loaded_scaler.transform(data_test)
    value_test = loaded_model.predict(newData_scaled)
    predict_num = value_test[0]

    return jsonify(str(predict_num))

@app.route('/getDropdownid1/', methods=['POST'])
def getDropdowns_id1():

    wineType_data = pd.read_csv("data/wineType.csv")
    return Response(wineType_data.to_json(orient="records"), mimetype='application/json')

@app.route('/getDropdownid2/', methods=['POST'])
def getDropdowns_id2():

    country_data = pd.read_csv("data/countryOptions.csv")
    return Response(country_data.to_json(orient="records"), mimetype='application/json')

@app.route('/getDropdownid3/', methods=['POST'])
def getDropdowns_id3():

    variety_data = pd.read_csv("data/varietyOptions.csv")
    return Response(variety_data.to_json(orient="records"), mimetype='application/json')

@app.route('/getDropdownid4/', methods=['POST'])
def getDropdowns_id4():

    winery_data = pd.read_csv("data/wineryOptions.csv")
    return Response(winery_data.to_json(orient="records"), mimetype='application/json')

@app.route('/getDropdownid5/', methods=['POST'])
def getDropdowns_id5():

    designation_data = pd.read_csv("data/designationOptions.csv")
    return Response(designation_data.to_json(orient="records"), mimetype='application/json')

@app.route('/getDropdownid6/', methods=['POST'])
def getDropdowns_id6():

    province_data = pd.read_csv("data/provinceOptions.csv")
    return Response(province_data.to_json(orient="records"), mimetype='application/json')

@app.route('/getdataFrame/', methods=['POST'])
def getdataFrame():

    df = pd.read_csv("data/df_dataTable.csv").drop("Unnamed: 0", axis=1)
    return Response(df.to_json(orient="records"), mimetype='application/json')

@app.route('/downloadCSV', methods=['GET'])
def downloadCSV():
    return send_file('data/df_download.csv', mimetype='text/csv',attachment_filename='df_download.csv',as_attachment=True)
    
if __name__ == "__main__":
    app.run(debug=True)
