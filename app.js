// Main application 
var express = require( 'express' )
var morgan = require('morgan')
var swig = require('swig')
var routes = require('./routes/');
var bodyParser = require( 'body-parser' )
var socketio = require( 'socket.io' )



var app = express()
var server = app.listen( 5667, function() {
	var host = server.address().address
	var port = server.address().port
	console.log( 'Server listening at http:%s:%s', host, port )
});
var io = socketio.listen( server )


app.use( morgan( 'dev' ) )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.use( '/', routes( io ) )
app.use( bodyParser.json() )



app.engine('html', swig.renderFile)
app.set('view engine', "html")
app.set('views', __dirname + "/views")
app.use(express.static(__dirname + '/public'));

swig.setDefaults({cache : false});
