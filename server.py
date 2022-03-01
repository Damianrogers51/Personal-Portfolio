from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, json

app = Flask(__name__)

# ROUTES
@app.route('/')
def welcome():
    global books

    return render_template('home.html')  

# AJAX FUNCTIONS

if __name__ == '__main__':
   app.run(debug = True)




