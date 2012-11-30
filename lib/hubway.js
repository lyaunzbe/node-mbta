var request = require('request')
    errors = ('./errors');

var base = 'http://hubwaydatachallenge.org/api/v1/';


var endpoint = {
  api : '',
  trip: 'trip/',
  station: 'station/'
};

module.exports = function(username, api_key){
	var client  = {
    key : api_key,
    username : username,
    uri_string : "?username="+username+"&api_key="+api_key
  };

  ['trip','station', 'api'].forEach(function(service) {
    client[service] = function(options,callback) {
      if(options.limit){
        client.uri_string += "&limit="+options.limit;
      }
      if(options.offset){
        client.uri_string += "&offset="+options.offset;
      }
      var uri = base + endpoint[service] + client.uri_string;
      request.get({uri: uri, json : true}, function(err, resp, body){
        if (err) return callback(err);

        if (resp.statusCode !== 200) {
          var error = errors[resp.statusCode];
          if (error) {
            err = new Error(error.message);
            err.code = resp.statusCode;
            err.type = error.type;
          } else {
            err = new Error('Unknown error: ' + resp.statusCode);
          }
          return callback(err);
        }

        if (typeof body === 'string') {
          return callback(new Error(body));
        }

        callback(null, body);
      });
    };
  });

	return client;
};
