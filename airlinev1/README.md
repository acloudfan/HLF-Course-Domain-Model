# org.acme.airline

ACME Airline V1

o Namespaces

Part of the Hyperledger Fabric Course
http://ACloudFan.com


# Test Data:

{
  "$class": "org.acme.airline.aircraft.Aircraft",
  "aircraftId": "CRAFT001",
  "ownershipType": "LEASED",
  "firstClassSeats": 10,
  "businessClassSeats": 20,
  "economyClassSeats": 100
}


// Exercise-1 Try adding this Data
// What is your observation?  Fix it 
{
  "$class": "org.acme.airline.aircraft.Aircraft",
  "aircraftId": "CRAFT001",
  "ownershipType": "LEASED",
  "firstClassSeats": 10,
  "businessClassSeats": 20,
  "economyClassSeats": 100,

  "nickName": "Johny"
}

// Exercise-2 Fix for issue in Exercise-1
{
  "$class": "org.acme.airline.aircraft.Aircraft",
  "aircraftId": "CRAFT002",
  "ownershipType": "LEASED",
  "firstClassSeats": 10,
  "businessClassSeats": 20,
  "economyClassSeats": 100,

  "nickName": "Johny"
}

// Exercise-3 Next asset definition has an additional field "colorOfAircraft"
// When you add this as an asset what happened?
{
  "$class": "org.acme.airline.aircraft.Aircraft",
  "aircraftId": "CRAFT003",
  "ownershipType": "LEASED",
  "firstClassSeats": 10,
  "businessClassSeats": 20,
  "economyClassSeats": 100,
  "colorOfAircraft": "Yellow",

  "nickName": "Johny"
}