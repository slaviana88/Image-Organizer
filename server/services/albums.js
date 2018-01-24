const Album = require('../models').Album;

module.exports = {
  create(req, res) {
    return Album.create({
      title: req.body.title,
      description: 'description here'
    })
      .then(album => res.status(201).send(album))
      .catch(error => res.status(400).send(error));
  }
};
