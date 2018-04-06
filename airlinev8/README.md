# org.acme.airline

# Airline v8

Refer to lecture on Transactions & Events

# Create the archive
composer archive create  --sourceType dir --sourceName ../

# Install the network
composer network install -a .\airlinev8@0.0.1.bna -c PeerAdmin@hlfv1

# Start the network
composer network start -c PeerAdmin@hlfv1 -n airlinev8 -V 0.0.1  -A admin -S adminpw

# Import the newly generated card
composer card import -f admin@airlinev8.card

# Check health of BNA
composer network ping -c admin@airlinev8
composer network list -c admin@airlinev8

# To upgrade
1. Create a new archive file - do not forget to change version in package.json e.g., 0.0.2
2. composer network install -a .\airlinev8@0.0.2.bna -c PeerAdmin@hlfv1
3. compose network upgrade -c admin@airlinev8 -V 0.0.2


# Add a new participant
https://hyperledger.github.io/composer/managing/participant-add.html

composer participant add -d '{"$class":"org.acme.airline.participant.ACMENetworkAdmin","participantKey":"johnd","contact":{"$class":"org.acme.airline.participant.Contact","fName":"John","lname":"Doe","email":"john.doe@acmeairline.com"}}' -c admin@airlinev8

# Issue an identity
composer identity issue -u johnd -a org.acme.airline.participant.ACMENetworkAdmin#johnd -c admin@airlinev8 -x

# List the identities
composer identity list -c admin@airlinev8

# Launch REST Server
composer-rest-server -c admin@airlinev8 -n always -w true

# Upgrade the app
+ Install the new version of BNA
composer network update -n airlinev8 -c PeerAdmin@hlfv1 -V 0.0.2

# Ping 
composer network ping -c admin@airlinev8
















# 

composer identity issue -

resource:net.biz.tutorial-network.Person#DanSelman@biznet.org

org.acme.airline.participant.ACMENetworkAdmin#raj

composer identity issue -a org.acme.airline.participant.ACMENetworkAdmin#raj -u raj -c admin@airlinev8

composer identity issue -a org.acme.airline.participant.ACMENetworkAdmin#raj@airlinev8 -u raj -c PeerAdmin@hlfv1


