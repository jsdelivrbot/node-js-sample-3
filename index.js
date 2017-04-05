var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

function readFile (path) {
  var fso = new ActiveXObject('Scripting.FileSystemObject'),
      iStream=fso.OpenTextFile(path, 1, false);
  while(!iStream.AtEndOfStream) {
      document.body.innerHTML += iStream.ReadLine() + '<br/>';
  }
  iStream.Close();
}

app.get('/', function(request, response) {
  response.send(readFile("jfk.txt"));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
