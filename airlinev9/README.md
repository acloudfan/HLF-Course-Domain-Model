# org.acme.airline

# Airline v8

Refer to lecture on Transactions & Events

composer archive create -a dist/airlinev7.bna --sourceType dir --sourceName .


composer network deploy -a airlinev7@0.0.1.bna -p basicnw -i user2 -s secret

https://stackoverflow.com/questions/46299853/connecting-hyperledger-composer-to-fabric

composer identity import -u admin -c Admin@org1.acme.com-cert.pem -k 36e6cdc500b27254f88b5f0672673f32b07b381de9b871f4acc445a5afaf0d66_sk

composer runtime install -i admin -s adminpw -p basicnw -n airlinev7

composer deploy -i admin -s adminpw -p basicnw -a airlinev8.bna

  composer network ping -n airlinev1 -p basicnw -i admin -s adminpw
  composer network list -n airlinev1 -p basicnw -i admin -s adminpw

composer-rest-server -p basicnw -n  airlinev1 -i admin -s adminpw -N always -w false


https://hyperledger.github.io/composer/reference/commands.html

