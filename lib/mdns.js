var os = require('os'),
    hostname = os.hostname().split('.local')[0],
    serviceName = 'mediascape-http';

if(process.platform === 'linux') {
  var avahi = require('avahi_pub');


  module.exports.advertise = function(player_id, utils, port) {
    var logger = utils.logger(__filename),
        txtRecord = 'players=' + JSON.stringify([player_id]),
        mdnsAd
        service;

        service = {
          name: hostname, type: '_'+serviceName+'._tcp',
          port: port, data: txtRecord
        };

        avahi.publish(service);

  };

} else {
  var mdns = require('mdns'),
    serviceType = mdns.makeServiceType({
      name: serviceName, protocol: 'tcp'
    });

  module.exports.advertise = function(player_id, utils, port) {
    var logger = utils.logger(__filename),
        txtRecord,
        mdnsAd;

    txtRecord = {
        players: JSON.stringify([player_id])
    };

    mdnsAd = mdns.createAdvertisement(
      serviceType.toString(), port, {txtRecord: txtRecord}
    );

    console.log('serviceType', mdnsAd, serviceType.toString());

    mdnsAd.start();
  };
}
