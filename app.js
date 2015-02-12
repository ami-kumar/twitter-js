// Main application 
var express = require( 'express' )
var morgan = require('morgan')
var app = express()

// set up Morgan to log app activity
// use 'dev' not 'combined' format
app.use( morgan( 'dev' ) )
app.get('/', function( req, res ) {
	res.send( 'hello, world!' )
} )

var server = app.listen( 3000, function() {
	var host = server.address().address
	var port = server.address().port

	console.log( 'Server listening at http:%s:%s', host, port )
} )