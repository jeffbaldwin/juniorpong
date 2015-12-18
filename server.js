var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var path = require('path');

// ---------------------------------------- Set up Twitterbot ---------------------------------------- //

var TwitterBot = require("node-twitterbot").TwitterBot;
var Bot = new TwitterBot({
  "consumer_key": "KKMIyQGVkXx8pT7OaYWiQB41N",
  "consumer_secret": "1TqTG6E0ufyS2DzFH04OSrhtCu6xgak4paax0VFUc3DDL2ln8i",
  "access_token": "4500636500-Sip9ymTek1O2qJma4eYJan5OLZ8qT3KkVvGkwvr",
  "access_token_secret": "NYv9lydGg54gnlnQdFbWf7R3BbyJRZ4PCVS4i16KpBeZ6"
});

// ---------------------------------------- Set up SlackBot ---------------------------------------- //

var Slack = require('node-slack');
var slack = new Slack("https://hooks.slack.com/services/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, options");

// import data
var data = require('./data/players');
var all = require('./data/allplayers');

// Make sure to include the ES6 & JSX transpiler
require('babel/register');

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));

// Set view path
app.set('views',__dirname + '/views');

// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// to support JSON-encoded bodies
app.use( bodyParser.json() );
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.render('game', {ctx: { 
        players: all.players 
    }});
});

app.get('/game', function(req, res) {
    res.render('game', 
    {ctx: { 
        player1: data.players['ashwath'], 
        player2: data.players['jeffrey']
    }});
});

app.listen(port, function(req, res){
    console.log('listening on port: ' + port);
});