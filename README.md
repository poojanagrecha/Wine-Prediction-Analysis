# Project: The Wine Price is Right
![image](https://github.com/poojanagrecha/Wine-Prediction-Analysis/blob/master/Wine%20Prediction%20Analysis.jpg)

<b>Deployed Link:</b> 

## Purpose

This project seeks to utilize different wine review features to predict wine prices. Our team took a dataset with 150k bottles of wine, scraped from Wine Enthusiast’s website and posted to Kaggle, and built a machine learning model to predict the price of a wine given its country of origin, province of the grapes, designation, winery, variety, and whether it’s red or white. The group then hosted a live application that takes in user input and delivers an estimate of wine price using the finalized model. One use for this tool would be to estimate the price of a gift bottle of wine.

## Data

The dataset came from the Wine Enthusiast magazine, which reviews a plethora of different wines and assigns points to indicate the quality of the wine and also notes different features. This information was scraped from the website and published as a CSV file, which our team downloaded and read into a DataFrame.  

## Exploratory Data Analysis 

Using Tableau, we filtered on state, province, wine variety, and wine quality. Color coding on a wine-themed gradient was emphasized to organize areas of our dataset that were meaningful. We can conclude through our visualizations that the top tasted wine varieties were Chardonnay and Pinot Noir. The best quality wine variety according to the points column in the dataset is Nebbiolo. Washington was the state with the highest quality of wine in the US while Nevada carried the spot for most expensive wine in the US.

[Tableau Visualizations](https://public.tableau.com/profile/pooja.nagrecha#!/vizhome/Wine_15999265262760/Sheet8)

![tableau imamge]

## Sentinment Analysis 

Sentiment analysis is the machine learning technique we utilized on the description column to detect the amount of polarity within the dataset. We calculated some statistics regarding the annotations, such as the number of “excellent” and “good” wines as well as the total number of annotations. We calculated the sentiment of each review using a binary classification model, which takes a sentence as an input and returns 1 or 0, corresponding to “excellent” or “good”. After classifying the reviews into two categories, we created DataFrames for each one and built respective wordclouds.

![sentiment images]

Looking at the distribution of reviews with sentiment across the dataset, we can see that “good” sentiment is double the “excellent” sentiment

![sentiment bar graph]

## Machine Learning

<b>Data Preparation </b>

Initially, our group had run a linear regression model for red wines and white wines between points and prices to see what the correlation was. Looking at the residual plots (Figure 4.1) it’s clear that the basic model was bad at predicting more expensive wines, so our group decided to bin the prices and run a classification model.

![image of residuals]

<b> Final Model Selection and Prediction Ability </b>
We settled on the Random Forest Regressor because it was more consistent across our target classes, while still maintaining moderate accuracy and precision scores. When we went to test predictions on our model, it seemed that we had resolved the issue of our model being unable to predict high priced wines. However, we noticed that the opposite trend was occurring - our model seemed to have issues predicting extremely cheap wines, this difficulty is likely due to the lower number of wines in the category. 

![random forest]

## Application Creation 
To begin our final application, we had to first build a skeleton. In order to run a machine learning model on the back-end, we had to integrate the Flask library in Python. For our web page to function correctly, every interactive feature on the HTML needed a route within the Flask app. Connecting the application to Heroku was straightforward and involved connecting the Heroku deployment to our GitHub repository.

![flask image]







