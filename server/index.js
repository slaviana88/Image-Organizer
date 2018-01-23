const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
// app.use(logger('dev'));
var db = require('./models');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./server/routes')(app);

app.listen(3001, () => {
  console.log('Example app listening on port 3001');
  db.sequelize.sync();
});
