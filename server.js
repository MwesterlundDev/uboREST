// server.js

// BASE SETUP
// =============================================================

//call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configure app to use bodyParser();
//this will let us get the data from a POST

app.use(bodyParser.urlecoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 1989 // set our port (tribute to the first year!!!)


// ROUTES FORE OUR API
// ==============================================================
var router = express.router();

// test route to make sure everything is working (accessed at GET ....)
router.get('/', function(request, response){
	res.json({message: 'horray! welcome to our api!'});

});

// more routes for our api will happen here

// RESGISTER OUR ROUTES -----------------------------------------
// all of our routes will be prefixed with /ubo
app.use('/ubo', router);

//START THE server
app.listen(port);
console.log("The magic happens on port " + port);