const fs = require('fs');

const Album = require('../models').Album;
const Image = require('../models').Image;
const Images = Album.hasMany(Image, {as: 'images'});

module.exports = {
  create(req, res) {
    console.log(req.body);
    // req.body
    // { description: 'dea',
    //   title: 'esfd',
    //   image:
    //    { filename: '24167549_1983288975021498_560944678_o.jpg',
    //      file_type: 'image/jpeg' }
    // }

    const {image} = req.body;
    const path = `${__dirname}/${image.filename}`;

    let bitmap = new Buffer(image.filename, 'base64');
    fs.writeFileSync(path, bitmap);

    const album = Album.create(
      {
        title: req.body.title,
        description: req.body.description,
        images: [
          {
            name: 'picture 1',
            pathToFile: req.body.image.filename
          }
        ]
      },
      {include: Images}
    )
      // const albums = Album.hasMany(Image, {as: 'albums'});
      // Image.create(
      //   {
      //     name: 'picture 1',
      //     pathToFile: req.body.image.filename,
      //     albums: [
      //       {
      //         title: req.body.title,
      //         description: req.body.description
      //       }
      //     ]
      //   },
      //   {include: albums}
      // )
      .then(album => res.status(201).send(album))
      .catch(error => res.status(400).send(error.message));
  }
};
