/**
 * Part of a course on Hyperledger Fabric: 
 * http://ACloudFan.com
 * 
 * This is to test the validation functionality
 */
var assert = require('chai').assert;


const utHarness = require('C:/Users/Rajeev/Documents/Course/Hyperledger-Course/workspace/wip/HLF-API/ut-harness.js');

// This points to the model project folder
var modelFolder = __dirname+'/..'

var adminConnection = {}
var businessNetworkConnection = {}
var bnDefinition = {}


// Synchronous call so that connections can be established
before((done) => {
    utHarness.debug = false;
    utHarness.initialize(modelFolder, (adminCon, bnCon, definition) => {
        adminConnection = adminCon;
        businessNetworkConnection = bnCon;
        bnDefinition = definition;
        done();
    });
})

const nameSpace = 'org.acme.airline.flight';
const assetName = 'Flight';
const transactionName = 'CreateFlight';

// Test Suite # 1
describe('Transaction # CreateFlight Add Validate', () => {

    // Test Case # 1
    it('should create & retrieve 1 Flight instance', () => {
       
        // Get the factory using the BN Definition
        const  factory = bnDefinition.getFactory();
        // Create the instance
        let    transaction = factory.newTransaction(nameSpace,transactionName);
        transaction.setPropertyValue('flightNumber','AE101');
        transaction.setPropertyValue('origin', 'EWR');
        transaction.setPropertyValue('destination' , 'ATL');
        // Set the future date
        transaction.setPropertyValue('schedule' , new Date('2020-10-15T21:44Z'));

        // Add the asset
        // Get the asset registry using the BN Connection
        return businessNetworkConnection.submitTransaction(transaction).then(()=>{

            return businessNetworkConnection.getAssetRegistry(nameSpace+"."+assetName)
        }).then((registry)=>{
            return registry.getAll();
            
        }).then((assets)=>{
            assert.lengthOf(assets, 1,"should have count of 1!!!" )
        }).catch((error)=>{
            console.log(error);
        });
    });

    // Test Case # 2

    it('should throw exception if schedule is past date', () => {
       
        // Get the factory using the BN Definition
        const  factory = bnDefinition.getFactory();
        // Create the instance
        let    transaction = factory.newTransaction(nameSpace,transactionName);
        transaction.setPropertyValue('flightNumber','AE101');
        transaction.setPropertyValue('origin', 'EWR');
        transaction.setPropertyValue('destination' , 'ATL');
        // Set the PAST date
        transaction.setPropertyValue('schedule' , new Date('2012-10-15T21:44Z'));

        // Add the asset
        // Get the asset registry using the BN Connection
        return businessNetworkConnection.submitTransaction(transaction).then(()=>{

            // If it comes here then the test case failed
            assert(false, "should have thrown an error");
            
        }).catch((error)=>{
            console.log(error);

            assert.isDefined(error);
        });
    });

});


