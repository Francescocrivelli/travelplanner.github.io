
from flask import Flask, request, jsonify
from travel_planner import TravelPlanner

app = Flask(__name__)

@app.route('/get_travel_plan', methods=['POST'])
def get_travel_plan():
    data = request.get_json()
    start_date = data['start_date']
    end_date = data['end_date']
    location = data['location']
    print(f"start_date: {start_date}, end_date: {end_date}, location: {location}")
    planner = TravelPlanner(start_date=start_date, end_date=end_date, location=location)
    return jsonify({"travel_plan": planner.GetTravelPlan()})

if __name__ == '__main__':
    app.run(
        port=5200, 
        # host='localhost',
        debug=True
    )


# # Test
# import requests

# data = {
#     "start_date": "2023-11-01",
#     "end_date": "2023-11-03",
#     "location": "Paris"
# }

# response = requests.post("http://localhost:5000/get_travel_plan", json=data)
# print(response.json())
