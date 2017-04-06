var express = require('express');
var app = express();

var fs = require('fs');

/*var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('jfk.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
});

rl.on('close', function() {
});*/

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  fs.readFile('my-file.txt', 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
  });
  response.send(data);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
