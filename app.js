// Main application 
var express = require( 'express' )
var morgan = require('morgan')
var app = express()
var swig = require('swig')
var routes = require('./routes/');


app.use( morgan( 'dev' ) )
app.use('/', routes);

app.use(express.static(__dirname + '/public'));

app.engine('html', swig.renderFile)
app.set('view engine', "html")
app.set('views', __dirname + "/views")

swig.setDefaults({cache : false});



var server = app.listen( 3100, function() {
	var host = server.address().address
	var port = server.address().port
	console.log( 'Server listening at http:%s:%s', host, port )
});

