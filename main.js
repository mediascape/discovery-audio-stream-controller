var express  = require('express'),
    web      = express(),
    client   = require('radiodan-client'),
    mdns     = require('./lib/mdns'),
    port     = process.env.WEB_PORT || 5000;


web.use('/radiodan',
  client.middleware({
    crossOrigin: true
  })
);

web.listen(port);

var radiodan = client.create();

var player_id = "main";

var player = radiodan.player.get(player_id);

mdns.advertise(player_id, client.utils, parseInt(port));

console.log('Listening on port '+port);
