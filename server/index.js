const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

var db = require('./models');

var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static(__dirname + '/services/images'));

require('./routes')(app);

app.listen(3001, () => {
  console.log('Listening on port 3001');
  db.sequelize.sync();
});
