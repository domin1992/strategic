var express = require('express');
var env = require('node-env-file');

env('./.env');

var app = express();

app.use(express.static('public'));
app.use('/modules', express.static('node_modules'));

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});