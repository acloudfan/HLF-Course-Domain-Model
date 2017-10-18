/**
 * Create Flight Transaction
 * @param {org.acme.airline.flight.CreateFlight} flightData
 * @transaction
 */
function    createFlight(flightData) {
    return getAssetRegistry('org.acme.airline.flight.Flight')
        .then(function(flightRegistry){
            // Now add the Flight
            var  factory = getFactory();
            var  NS =  'org.acme.airline.flight';

            var  flightId = 'AE102-05-12-18';
            var  flight = factory.newResource(NS,'Flight',flightId);
            
            flight.flightNumber = flightData.flightNumber;

            var route = factory.newConcept(NS,"Route");

            route.origin = flightData.origin;
            route.destination = flightData.destination;
            route.schedule = flightData.schedule;
            flight.route = route;
            flight.aliasFlightNumber = [];

            // Emit the event FlightCreated
            var event = factory.newEvent(NS, 'FlightCreated');
            event.flightId = flightId;
            emit(event);

            return flightRegistry.addAll([flight]);
        });
}



/****
 
 */