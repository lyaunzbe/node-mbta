var hubway = require('./lib/hubway.js')(process.argv[2], process.argv[3]),
    async = require('async');

//hubway.api({},function(err, data){
  //if (err) console.log(err);
	//console.log('API endpoint: ', JSON.stringify(data,true,2));
	//console.log('.....................\n');
//})

var options = {
  offset:0,
  limit: 1000
}

var count = 0;
var bigO = [];
var done = false;
async.until(
  function(){return done},
  function(callback){
    hubway.trip(options, function(err, data){
      if(err){callback(err)}
      bigO.concat(data);
      if(data.meta.next == null){
        done = true;
      }else{
        options.offset +=1000;
        console.log(data.meta.next);
      }
      callback();
    })
  },
  function(err){
    console.log(err);
    console.log(big0);
  }
);
