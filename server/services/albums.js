const fs = require('fs');

const Album = require('../models').Album;
const Image = require('../models').Image;
const Images = Album.hasMany(Image, {as: 'images'});

module.exports = {
  create(req, res) {
    console.log('request body', req.body);
    console.log('files', req.files);

    if (req.files) {
      req.files.file.map(file => {
        const path = `${__dirname}/images/${file.name}`;
        file.mv(path, function(err) {
          if (err) return res.status(500).send(err);
        });
      });
      console.log('File uploaded!');
      res.status(201).send('File uploaded');
    } else {
      const {images} = req.body;

      const imageToSave = images.map(img => ({pathToFile: img, name: img}));
      console.log('images to save', imageToSave);
      const album = Album.create(
        {
          title: req.body.title,
          description: req.body.description,
          images: imageToSave
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
