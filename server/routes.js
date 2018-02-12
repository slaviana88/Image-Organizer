const db = require('./models');
const services = require('./services');

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

  app.get('/api/albums/:id/', function(req, res) {
    db.Album
      .findAll({
        where: {id: req.params.id},
        include: {model: db.Image, as: 'images'}
      })
      .then(function(album) {
        // res.json(album);
        console.log(album);
        if (!album) {
          return res.status(404).send({
            message: 'album Not Found'
          });
        }
        return res.status(200).send(album);
      })
      .catch(err => res.status(400).send(err));
  });

  app.post('/api/albums/create', services.albums.create);

  app.post('/api/albums/:albumId/add-image', services.albums.addImage);
};
