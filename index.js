var express = require('express')
var app = express()

var txtFile = "little.txt";
var myFile = new File(txtFile);

myFile.open("r");
var str = "";
while (!file.eof) {
	// read each line of text
	str += file.readln() + "\n";
}
file.close();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(str);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
