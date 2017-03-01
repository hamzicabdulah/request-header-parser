var express = require('express');
var app = express();

app.get('/api/whoami', function (req, res) {
    var language = req.headers['accept-language'],
    agent = req.headers['user-agent'];
    
    var object = {
        ipaddress: req.headers['x-forwarded-for'],
        language: language.slice(0, language.indexOf(',')),
        software: agent.slice(agent.indexOf('(')+1, agent.indexOf(')'))
    };
    
    res.send(object);
});

app.get('/:anything', function (req, res) {
    res.redirect('/');
});

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port 8080');
});