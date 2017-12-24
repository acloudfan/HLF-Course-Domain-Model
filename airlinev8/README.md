# org.acme.airline

# Airline v8

Refer to lecture on Transactions & Events

# Create the archive
composer archive create  --sourceType dir --sourceName ../

# Setup the network
composer network deploy -a .\airlinev8@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw
composer network start -a .\airlinev8@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw

# Import the card
composer card import -f admin@airlinev8.card

# Update the Network
composer network update -a .\airlinev8@0.0.1.bna -c admin@airlinev8