var request = require('request')
    errors = ('./errors');

var base = 'http://developer.mbta.com/lib/rthr/';


var endpoints = {
  red: 'red.json',
  orange: 'orange.json',
  blue:'blue.json'
};

module.exports = {
  get: function(opts, callback){
    uri = base + endpoints[opts.line];
    request.get({uri: uri}, function(err, resp, body){
      if (err) return callback(err);

      if (resp.statusCode !== 200) {
        var error = errors[resp.statusCode];
      
        if (error) {
          console.log('yo');
        
          err = new Error(error.message);
          err.code = resp.statusCode;
          err.type = error.type;
        } else {
          console.log('y');
        
          err = new Error('Unknown error: ' + resp.statusCode);
          return callback(err);
        }

        callback(err);
        
      }

      callback(null, body);
    });
  }
};
