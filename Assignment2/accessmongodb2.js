var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017", function (err, client) {

    var obj = [{ id: 1, firstName: 'Steve', lastName: 'Jobs' },
    { id: 2, firstName: 'Bill', lastName: 'Gates' }];

    var db = client.db('demo');

    db.collection("Person").insertMany(obj, function (err, res) {
        if (err) throw err;  
        console.log("Number of records inserted: " + res.insertedCount);  
        client.close();
    })
    
    // db.collection('Persons', function (err, collection) {
        
    //     collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
    //     collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
    //     collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

    //     db.collection('Persons').count(function (err, count) {
    //         if (err) throw err;
            
    //         console.log('Total Rows: ' + count);
    //     });
    // });
                
});