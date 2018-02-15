const _ = require('lodash');
const fs = require('fs');

const Album = require('../models').Album;
const Image = require('../models').Image;
const Images = Album.hasMany(Image, { as: 'images' });

module.exports = {
  create(req, res) {
    console.log('request body', req.body);
    console.log('files', req.files);

    if (req.files) {
      if (_.isArray(req.files.file)) {
        req.files.file.map(file => {
          const path = `${__dirname}/images/${file.name}`;
          file.mv(path, function(err) {
            if (err) return res.status(500).send(err);
          });
        });
      } else {
        const { file } = req.files;
        const path = `${__dirname}/images/${file.name}`;
        file.mv(path, function(err) {
          if (err) return res.status(500).send(err);
        });
      }
      console.log('File uploaded!');
      res.status(201).send('File uploaded');
    } else {
      const { images } = req.body;

      const imageToSave = images.map(img => ({ pathToFile: img, name: img }));
      console.log('images to save', imageToSave);
      const album = Album.create(
        {
          title: req.body.title,
          description: req.body.description,
          images: imageToSave,
          latitude: req.body.latitude,
          longtitude: req.body.longtitude
        },
        { include: Images }
      )
        .then(album => res.status(201).send(album))
        .catch(error => res.status(400).send(error.message));
    }
  },
  update(req, res) {
    console.log('request body', req.body);
    console.log('files', req.files);

    if (req.files) {
      if (_.isArray(req.files.file)) {
        req.files.file.map(file => {
          const path = `${__dirname}/images/${file.name}`;
          file.mv(path, function(err) {
            if (err) return res.status(500).send(err);
          });
        });
      } else {
        const { file } = req.files;
        const path = `${__dirname}/images/${file.name}`;
        file.mv(path, function(err) {
          if (err) return res.status(500).send(err);
        });
      }
      console.log('File uploaded!');
      res.status(201).send('File uploaded');
    } else {
      const { images } = req.body;
      Album.update(
        { latitude: req.body.latitude, longtitude: req.body.longtitude },
        { where: { id: req.params.albumId } }
      ).then(album => {
        console.log(album);
        images &&
          Image.destroy({
            where: { AlbumId: parseInt(req.params.albumId) }
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
