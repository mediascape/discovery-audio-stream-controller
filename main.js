var express  = require('express'),
    app      = express(),
    radiodan = require('radiodan-client'),
    mdns     = require('./lib/mdns'),
    port     = 5000;
//  port     = process.env.PORT || 5000;

app.use('/radiodan',
  radiodan.middleware({crossOrigin: true})
);

app.listen(port);

mdns.advertise(radiodan, parseInt(port));

console.log('Listening on port '+port);
