# org.acme.airline

# Airline v7

Refer to lecture on Transactions & Events

cd dist
composer archive create  --sourceType dir --sourceName ../

# Install the Runtime and Start
composer network deploy -a .\airlinev7@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw

# Import the card that was generated
composer card delete -n admin@airlinev7
composer card import -f .\admin@airlinev7.card

composer network start -a .\airlinev7@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw



# List out the network apps for this card
composer network list  -c admin@airlinev7