# Project: The Wine Price is Right
![image](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/Wine%20Prediction%20Analysis.jpg)

<b>Deployed Link:</b> https://smu-capstone-group-wine.herokuapp.com/

## Purpose

This project seeks to utilize different wine review features to predict wine prices. Our team took a dataset with 150k bottles of wine, scraped from Wine Enthusiast’s website and posted to Kaggle, and built a machine learning model to predict the price of a wine given its country of origin, province of the grapes, designation, winery, variety, and whether it’s red or white. The group then hosted a live application that takes in user input and delivers an estimate of wine price using the finalized model. One use for this tool would be to estimate the price of a gift bottle of wine.

## Data

The dataset came from the Wine Enthusiast magazine, which reviews a plethora of different wines and assigns points to indicate the quality of the wine and also notes different features. This information was scraped from the website and published as a CSV file, which our team downloaded and read into a DataFrame.  

## Exploratory Data Analysis 

Using Tableau, we filtered on state, province, wine variety, and wine quality. Color coding on a wine-themed gradient was emphasized to organize areas of our dataset that were meaningful. 

[Tableau Visualizations](https://public.tableau.com/profile/pooja.nagrecha#!/vizhome/Wine_15999265262760/Sheet8)

![tableau image](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/Tableau.png)

![tableau image](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/Tableau2.png)

## Sentiment Analysis 

Sentiment analysis is the machine learning technique we utilized on the description column to detect the amount of polarity within the dataset. We calculated some statistics regarding the annotations, such as the number of “excellent” and “good” wines as well as the total number of annotations. 

![sentiment images](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/SA.png)
- Word cloud generated corresponding to excellent

![sentiment image](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/SA2.png)
- Word cloud generated corresponding to good

Looking at the distribution of reviews with sentiment across the dataset, we can see that “good” sentiment is double the “excellent” sentiment

![sentiment bar graph](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/SA3.png)

## Machine Learning

<b>Data Preparation </b>

Initially, our group had run a linear regression model for red wines and white wines between points and prices to see what the correlation was. Looking at the residual plots it’s clear that the basic model was bad at predicting more expensive wines, so our group decided to bin the prices and run a classification model.

![image of residuals](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/residuals.png)

<b> Final Model Selection and Prediction Ability </b>

We settled on the Random Forest Regressor because it was more consistent across our target classes, while still maintaining moderate accuracy and precision scores. 

![random forest](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/randomforest.png)

## Application Creation 
To begin our final application, we had to first build a skeleton. In order to run a machine learning model on the back-end, we had to integrate the Flask library in Python. For our web page to function correctly, every interactive feature on the HTML needed a route within the Flask app. 

![flask image](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Images/flask.png)







