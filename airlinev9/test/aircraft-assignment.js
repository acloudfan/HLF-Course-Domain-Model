/**
 * Part of a course on Hyperledger Fabric: 
 * http://ACloudFan.com
 * 
 * This is to test the AssignAircraft transaction
 * 
 * Pre-requisite
 * =============
 * 
 */
var assert = require('chai').assert;

// CHANGE THIS TO APPROPRIATE Folder
//const utHarness = require('C:/Users/Rajeev/Documents/Course/Hyperledger-Course/workspace/wip/HLF-API/ut-harness.js');
const utHarness = require('/Users/rajeevsakhuja/Documents/temp/drive-download-20171224T113254Z-001/api/ut-harness.js')

// This points to the model project folder
var modelFolder = __dirname+'/..'

var adminConnection = {}
var businessNetworkConnection = {}
var bnDefinition = {}
var factory = {}


// Synchronous call so that connections can be established
// Executed before the describe{} gets executed
before((done) => {
    utHarness.debug = false;
    utHarness.initialize(modelFolder, (adminCon, bnCon, definition) => {
        adminConnection = adminCon;
        businessNetworkConnection = bnCon;
        bnDefinition = definition;
        factory = bnDefinition.getFactory();
        done();
    });
});

const nameSpaceFlight = 'org.acme.airline.flight';
const assetNameFlight = 'Flight';
const nameSpaceAircraft = 'org.acme.airline.aircraft';
const assetNameAircraft = 'Aircraft';
const transactionNameCreate = 'CreateFlight';
const transactionNameAssign = 'AssignAircraft';

var flightId = 'AE101-01-03-20';
var aircraftId = 'CRAFT01';

describe('Transaction # AssignAircraft  Valid', () => {

    // 1. Create and instance of aircraft (id=CRAFT01)
    // 2. Creat an instance of flight (id=AE101-01-03-18)
    // Gets executed before the it{] blocks get executed within this describe{} block
    before((done)=>{
        
        let    transaction = factory.newTransaction(nameSpaceFlight,transactionNameCreate);
        transaction.setPropertyValue('flightNumber','AE101');
        transaction.setPropertyValue('origin', 'EWR');
        transaction.setPropertyValue('destination' , 'SEA');
        // Set the future date
        transaction.setPropertyValue('schedule' , new Date('2020-01-03T21:44Z'));

        businessNetworkConnection.submitTransaction(transaction).then(()=>{
            console.log("Flight Added: ",flightId);
            return businessNetworkConnection.getAssetRegistry(nameSpaceAircraft+"."+assetNameAircraft);
        }).then((registry)=>{
            let    aircraftResource = factory.newResource(nameSpaceAircraft,assetNameAircraft,'CRAFT01');
            aircraftResource.setPropertyValue('ownershipType','LEASED');
            aircraftResource.setPropertyValue('firstClassSeats',10);
            aircraftResource.setPropertyValue('businessClassSeats',10);
            aircraftResource.setPropertyValue('economyClassSeats',50);
            return registry.add(aircraftResource);
        }).then(()=>{
            console.log("Aircraft Added: ",aircraftId);
            done();
        }).catch((error)=>{
            console.log(error);
            process.exit(1);
        })
    });
    
    var flightRegistry={}
    // Test Case # 1 Sunny day path - we are able to assign an aircraft to the flight
    it('should assign the CRAFT01 to flight AE101-01-03-20', () => {
        
        // Get the factory using the BN Definition
        const  factory = bnDefinition.getFactory();
        // Create the instance
        let    transaction = factory.newTransaction(nameSpaceFlight,transactionNameAssign);
        transaction.setPropertyValue('flightId',flightId);
        transaction.setPropertyValue('aircraftId', aircraftId);

        // Add the asset
        // Get the asset registry using the BN Connection
        return businessNetworkConnection.submitTransaction(transaction).then(()=>{
            
            return businessNetworkConnection.getAssetRegistry(nameSpaceFlight+"."+assetNameFlight)
        }).then((registry)=>{
            flightRegistry=registry;
            return registry.get(flightId)
            
        }).then((asset)=>{
            // Check if the aircraft ID is set for the flight
            assert.deepEqual(asset.aircraft.$identifier,'CRAFT01',"should be set to CRAFT01!!")
        });
    });

    // Test Case #2 Assign an aircraft to non-existent flight
    it('should throw an error in case a non-existing flight ID is used',()=>{
        // Get the factory using the BN Definition
        const  factory = bnDefinition.getFactory();
        // Create the instance
        let    transaction = factory.newTransaction(nameSpaceFlight,transactionNameAssign);
        transaction.setPropertyValue('flightId',"This-Does-Not-Exist");
        transaction.setPropertyValue('aircraftId', aircraftId);

        return businessNetworkConnection.submitTransaction(transaction).then(()=>{
            assert(false, 'should have thrown an error')
        }).catch((error)=>{
            console.log(error);
            assert(true, 'should throw error')
        })
    });
});