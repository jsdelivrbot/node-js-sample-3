var express = require('express');
var app = express();
var fs = require('fs');

try {
    var data = fs.readFileSync('jkf.txt', 'utf8');
    console.log(data);
} catch(e) {
    console.log('Error:', e.stack);
}

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(data);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
