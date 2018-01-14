const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
// app.use(logger('dev'));
var db = require('./models');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/albums', function(req, res) {
  db.Album.findAll()
    .then(function (albums) {
      res.json(albums);
    })
    .catch((err) => console.log("Error with albums: ", err))
});


app.listen(3001, () => {console.log('Example app listening on port 3001'); db.sequelize.sync();});
