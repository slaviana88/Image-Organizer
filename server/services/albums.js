const _ = require('lodash');
const fs = require('fs');

const Album = require('../models').Album;
const Image = require('../models').Image;
const Images = Album.hasMany(Image, {as: 'images'});

function uploadImage(file) {
  const path = `${__dirname}/images/${file.name}`;
  file.mv(path, function(err) {
    console.log(err);
  });
}

module.exports = {
  create(req, res) {
    req.files.file.map(file => {
      uploadImage(file);
    });

    const {body} = req;
    const imageToSave = body.filename.map(name => ({
      pathToFile: name,
      name: name
    }));

    const album = Album.create(
      {
        title: body.title,
        description: body.description,
        images: imageToSave,
        latitude: body.latitude,
        longtitude: body.longtitude
      },
      {include: Images}
    )
      .then(album => res.status(201).send(album))
      .catch(error => res.status(400).send(error.message));
  },
  update(req, res) {
    if (req.files) {
      if (_.isArray(req.files.file)) {
        req.files.file.map(file => {
          const path = `${__dirname}/images/${file.name}`;
          file.mv(path, function(err) {
            if (err) return res.status(500).send(err);
          });
        });
      } else {
        const {file} = req.files;
        const path = `${__dirname}/images/${file.name}`;
        file.mv(path, function(err) {
          if (err) return res.status(500).send(err);
        });
      }
      console.log('File uploaded!');
      res.status(201).send('File uploaded');
    } else {
      const {images} = req.body;
      Album.update(
        {
          latitude: req.body.latitude,
          longtitude: req.body.longtitude
        },
        {
          where: {
            id: req.params.albumId
          }
        }
      ).then(album => {
        images &&
          Image.destroy({
            where: {
              AlbumId: parseInt(req.params.albumId)
            }
          }).then(() => {
            const imageToSave = images.map(img => ({
              pathToFile: img,
              name: img
            }));

            images.map(img => {
              const image = Image.create({
                pathToFile: img,
                name: img,
                AlbumId: req.params.albumId
              });
            });
          });
      });
      res.status(201).send('ok');
    }
  }
};
