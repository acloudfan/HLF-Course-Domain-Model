# Create the archive
composer archive create  --sourceType dir --sourceName ../ -a archive.bna

# Install the archive
composer network install -a ./archive.bna -c PeerAdmin@hlfv

# Strart the network
composer network start -n airlinev9 -c PeerAdmin@hlfv1 -V 0.0.1 -A admin -S adminpw

# Use the card generated
composer card import -f admin@airlinev8.card