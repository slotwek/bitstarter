var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  //var buf = new Buffer(1000);
  var fileName = fs.readFileSync("index.html", "utf-8");
  /*
  for (var i = 0; i < fileName.length; i++) {
    buf[i] = str.charCodeA(i);
  }
  */
  resonse.send(fileName);
});

/*
app.get('/', function(request, response) {
  response.send('Hello World 2!');
});
*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
