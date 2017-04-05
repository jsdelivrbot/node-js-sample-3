var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var fs = require("fs");
  fs.readFile("./mytext.txt", function(text){
    var textByLine = text.split("\n")
    response.send(text);
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
