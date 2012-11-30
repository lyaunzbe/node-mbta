var mbta = require('./lib/node-mbta.js');
console.log(mbta);
mbta.get({line:'orange'}, function(err, body){
  console.log(body);
})

