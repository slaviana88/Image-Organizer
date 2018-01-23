const services = require('../services');

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todos API!'
    })
  );

  app.get('/albums', function(req, res) {
    db.Album
      .findAll()
      .then(function(albums) {
        res.json(albums);
      })
      .catch(err => console.log('Error with albums: ', err));
  });

  app.post('/api/albums/create', services.albums.create);
};
