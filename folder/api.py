
from flask import Flask, request, jsonify
from travel_planner import TravelPlanner

app = Flask(__name__)

@app.route('/get_travel_plan', methods=['POST'])
def get_travel_plan():
    data = request.get_json()
    start_date = data['start_date']
    end_date = data['end_date']
    location = data['location']
    planner = TravelPlanner(start_date=start_date, end_date=end_date, location=location)
    return jsonify({"travel_plan": planner.GetTravelPlan()})

if __name__ == '__main__':
    app.run(debug=True)
