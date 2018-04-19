var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.get('/kill',function(req,res) {
  process.exit();
});

app.listen(4000);