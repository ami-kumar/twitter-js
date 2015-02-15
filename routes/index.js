var express = require( 'express')
var router = express.Router()
var tweetBank = require( '../tweetBank' )

router.get( '/', function( req, res ) {
	var tweets = tweetBank.list()
	res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  res.render( 'index', { title: 'Twitter.js - Posts by '+name , tweets: list, showForm: true, user: name} );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var id = req.params.id;
  var name = req.params.name;
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name , tweets: list, showForm: true, user: name } );
});

router.post('/submit', function(req, res) {
  JSON.stringify(req.body, null, 2);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});



module.exports = router