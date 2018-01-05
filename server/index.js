const express = require('express');

const app = express();

app.get('/albums', function(req, res) {
  console.log('in album lists');
});

app.listen(3001, () => console.log('Example app listening on port 3001'));
