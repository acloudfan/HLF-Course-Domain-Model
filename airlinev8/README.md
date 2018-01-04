# org.acme.airline

# Airline v8

Refer to lecture on Transactions & Events

# Create the archive
composer archive create  --sourceType dir --sourceName ../

# Setup the network
composer network deploy -a ./airlinev8@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw
composer network start -a .\airlinev8@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw

# Import the card
composer card import -f admin@airlinev8.card

# Update the Network
composer network update -a ./airlinev8@0.0.1.bna -c admin@airlinev8

# Add a new participant
https://hyperledger.github.io/composer/managing/participant-add.html

composer participant add -d '{"$class":"org.acme.airline.participant.ACMENetworkAdmin","participantKey":"johnd","contact":{"$class":"org.acme.airline.participant.Contact","fName":"John","lname":"Doe","email":"john.doe@acmeairline.com"}}' -c admin@airlinev8

# Issue an identity
composer identity issue -u johnd -a org.acme.airline.participant.ACMENetworkAdmin#johnd -c admin@airlinev8 -x

# List the identities
composer identity list -c admin@airlinev8

# Launch REST Server
composer-rest-server -c admin@airlinev8 -n always -w true

# Update the app
composer network update -a ./airlinev8@0.0.1.bna -c admin@airlinev8




















# 

composer identity issue -

resource:net.biz.tutorial-network.Person#DanSelman@biznet.org

org.acme.airline.participant.ACMENetworkAdmin#raj

composer identity issue -a org.acme.airline.participant.ACMENetworkAdmin#raj -u raj -c admin@airlinev8

composer identity issue -a org.acme.airline.participant.ACMENetworkAdmin#raj@airlinev8 -u raj -c PeerAdmin@hlfv1


