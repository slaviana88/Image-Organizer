const fs = require('fs');

const Album = require('../models').Album;
const Image = require('../models').Image;
const Images = Album.hasMany(Image, {as: 'images'});

module.exports = {
  create(req, res) {
    if (req.files) {
      const path = `${__dirname}/images/${req.files.file.name}`;
      req.files.file.mv(path, function(err) {
        if (err) return res.status(500).send(err);

        console.log('File uploaded!');
        res.status(201).send('File uploaded');
      });
    } else {
      const {image} = req.body;
      const album = Album.create(
        {
          title: req.body.title,
          description: req.body.description,
          images: [
            {
              name: 'picture 1',
              pathToFile: image.filename
            }
          ]
        },
        {include: Images}
      )
        .then(album => res.status(201).send(album))
        .catch(error => res.status(400).send(error.message));
    }
  },
  addImage(req, res) {
    console.log('here');
  }
};
