//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
const cors = require('cors'); // Fixing CORS Error

app.use(cors());

//"http://localhost:8000/customers"
app.get('/customers/edit/:id', function (req, res) {
    // Read existing customer.
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var customers = JSON.parse( data );
 
        function findId(customers, idToLookFor) {
         var categoryArray = customers;
         for (var i = 0; i < categoryArray.length; i++) {
             if (categoryArray[i].id == idToLookFor) {
                 return(categoryArray[i]);
             }
         }
     }
     var customer = findId(customers, req.params.id); 
     res.end( JSON.stringify(customer));
     });
 });

 // Endpoint to Get a list of customer
app.get('/customers', function(req, res){
    fs.readFile(__dirname + "/" + "data.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
});


// // //Step 1: Create a new customer variable
// var res = [{ 
//         "id": 4684890832062,
//         "name": "Test 10",
//         "quantity": 60,
//         "product_id": 4455579025474,
//         "orderId": 21,
//         "orderDate": "2020-04-24T11:41:40.000Z" 
// }]; 

// The addUser endpoint
app.post('/customers/addUser', function(req, res){
    //Step 2: read existing customer
    fs.readFile(__dirname + "/" + "data.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append user variable to list
        data.push(res);
        console.log(data);
        res.end(data);
    });
});

// Create a server to listen at port 8000
var server = app.listen(8000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://localhost", host, port)
});