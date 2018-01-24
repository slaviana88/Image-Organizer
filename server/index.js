const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
// app.use(logger('dev'));
var db = require('./models');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./routes')(app);
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  })
);

app.listen(3001, () => {
  console.log('Listening on port 3001');
  db.sequelize.sync();
});
