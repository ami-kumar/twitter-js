// Main application 
var express = require( 'express' )
var morgan = require('morgan')
var app = express()
var swig = require('swig')
var routes = require('./routes/');
var bodyParser = require('body-parser');

app.use( morgan( 'dev' ) )

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes);


// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})



app.use(express.static(__dirname + '/public'));


app.engine('html', swig.renderFile)
app.set('view engine', "html")
app.set('views', __dirname + "/views")

swig.setDefaults({cache : false});

var server = app.listen(5210, function() {
	var host = server.address().address
	var port = server.address().port
	console.log( 'Server listening at http:%s:%s', host, port )
});

