var express = require('express')
var app = express()

function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0];
  if(f){
    var r = new FileReader();
      r.onload = function(e) {
	   var contents = e.target.result;
       }
    }
}

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(readSingleFile("jfk.txt"));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
