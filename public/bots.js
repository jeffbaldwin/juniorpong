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
var slack = new Slack("https://hooks.slack.com/services/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");


