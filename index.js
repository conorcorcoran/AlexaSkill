var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() { //Executes when a new session is launched
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        this.emit(':tell', "Here is the latest news from Beat one o two one o three <audio src='https://s3.amazonaws.com/news-brief/test_clip.mp3'/>"); //https://s3.amazonaws.com/news-brief/news_test_48k.mp3
        
    }
};