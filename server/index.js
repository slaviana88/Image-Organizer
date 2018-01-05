const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
// app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/albums', function(req, res) {
  res.status(200).send({
    albums: 'Welcome to the beginning of albums.'
  });
});

app.listen(3001, () => console.log('Example app listening on port 3001'));
