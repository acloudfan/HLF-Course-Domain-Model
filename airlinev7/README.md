# org.acme.airline

# Airline v7

Refer to lecture on Transactions & Events

cd dist
composer archive create  --sourceType dir --sourceName ../
# Create the archive
composer archive create  --sourceType dir --sourceName ../

# Install the BNA
composer network install -a .\airlinev7@0.0.1.bna -c 

# Start the BNA
composer network start -c PeerAdmin@hlfv1 -n airlinev7 -V 0.0.1 -A admin -S adminpw

# Import the card that was generated
composer card delete -n admin@airlinev7
composer card import -f .\admin@airlinev7.card

# List out the network apps for this card
composer network list  -c admin@airlinev7