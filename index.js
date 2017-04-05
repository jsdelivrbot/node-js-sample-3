var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

function readText(filePath) {
  var files = evt.target.files;

if (files) {
  for (var i = 0, f; f = files[i]; i++) {
      var r = new FileReader();
      r.onload = (function (f) {
          return function (e) {
              var contents = e.target.result;
              alert(contents);
          };
      })(f);
      r.readAsText(f);
  }
} else {
  alert("Failed to load files");
}
}

app.get('/', function(request, response) {
  response.send(readFile("jfk.txt"));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
