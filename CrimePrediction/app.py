import os
import pickle
from flask import Flask, render_template, request

# Initialize Flask application
app = Flask(__name__)

base_dir = os.path.abspath(os.path.dirname(__file__))

# Load the trained Decision Tree model using pickle
model_path = os.path.join(base_dir, 'decision_tree_model.pkl')
with open(model_path, 'rb') as file:
    decision_tree_model = pickle.load(file)

# Define route for the home page
@app.route('/')
def home():
    return render_template('index.html')  # Render the home page template


@app.route('/index.html')
def retHome():
    return render_template('index.html')


@app.route('/Analysis')
def retAnalysis():
    return render_template('Analysis.html')

@app.route('/solution.html')
def sol():
    return render_template('solution.html')
# Define route to handle form submission and prediction
@app.route('/Model.html')
def Predict():
    return render_template('Model.html')
state_mapping = {
    'A & N ISLANDS': 1,
    'ANDHRA PRADESH': 2,
    'ARUNACHAL PRADESH': 3,
    'ASSAM': 4,
    'BIHAR': 5,
    'CHANDIGARH': 6,
    'CHHATTISGARH': 7,
    'D & N HAVELI': 8,
    'DAMAN & DIU': 9,
    'Delhi UT': 10,
    'GOA': 11,
    'GUJARAT': 12,
    'HARYANA': 13,
    'HIMACHAL PRADESH': 14,
    'JAMMU & KASHMIR': 15,
    'JHARKHAND': 16,
    'KARNATAKA': 17,
    'KERALA': 18,
    'LAKSHADWEEP': 19,
    'MADHYA PRADESH': 20,
    'MAHARASHTRA': 21,
    'MANIPUR': 22,
    'MEGHALAYA': 23,
    'MIZORAM': 24,
    'NAGALAND': 25,
    'ODISHA': 26,
    'PUDUCHERRY': 27,
    'PUNJAB': 28,
    'RAJASTHAN': 29,
    'SIKKIM': 30,
    'TAMIL NADU': 31,
    'TELANGANA': 32,
    'TRIPURA': 33,
    'UTTAR PRADESH': 34,
    'UTTARAKHAND': 35,
    'WEST BENGAL': 36,

}
@app.route('/predict', methods=['POST'])
def predict():
    # Get input values from the form
    state_name = request.form['state']
    year = int(request.form['year'])

    numerical_value = state_mapping.get(state_name.upper(), -1)
    # Make prediction using the loaded model
    prediction = decision_tree_model.predict([[numerical_value, year]])

    # Get the predicted values
    murder, total_theft, riots, crime_on_women, total_ipc_crimes, result = prediction[0]

    if result == 1 :
        result = "High Crime"
        res = "Not Safe"
    else :
        result = "Low Crime"
        res = "Safe"

    # Render the result page template with predictions
    return render_template('result.html',
                           state = state_name.upper(),
                           murder=murder,
                           total_theft=total_theft,
                           riots=riots,
                           crime_on_women=crime_on_women,
                           total_ipc_crimes=total_ipc_crimes,
                           result=result,
                           res = res)

@app.route('/aboutus.html')
def about():
    return render_template('aboutus.html')

@app.route('/FAQs.html')
def retFaqs():
    return render_template('FAQs.html')


@app.route('/ContactUs.html')
def retCont():
    return  render_template('ContactUs.html')
if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask application
