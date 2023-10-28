import requests

data = {
    "start_date": "2023-11-01",
    "end_date": "2023-11-03",
    "location": "Paris"
}

response = requests.post("http://localhost:5000/get_travel_plan", json=data)
print(response.json())
