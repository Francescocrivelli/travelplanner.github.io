
import requests

url = "https://api.flightapi.io/roundtrip"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer API_TOKEN"
}
data = {
    "api_key": "653d830001b26894ef8d871b",
    "departure_airport_code": "",  # IATA code
    "arrival_airport_code": "",  # IATA code
    "departure_date": "",  # Format - YYYY-MM-DD
    "arrival_date": "",  # Format - YYYY-MM-DD
    "number_of_adults": "",
    "number_of_childrens": "",
    "number_of_infants": "",
    "cabin_class": "",  # Economy, Business, First, Premium_Economy
    "currency": "USD"
    }

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    # Successful API request
    print(response.json())
else:
    # Failed API request
    print("Error:", response.status_code)
