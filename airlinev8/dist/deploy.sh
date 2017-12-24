# Create the archive
composer archive create  --sourceType dir --sourceName ../ -a archive.bna

# Deploy the archive
composer network deploy -a .\archive.bna -c PeerAdmin@hlfv1 -A admin -S adminpw

# Use the card generated
composer card import -f admin@airlinev8.card
