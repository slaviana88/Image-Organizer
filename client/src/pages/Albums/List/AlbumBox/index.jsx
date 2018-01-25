import React from 'react';

import './styles.scss';

const AlbumBox = ({ album }) => {
  return (
    <div className="col-md-3">
      <div className="album-box">
        <div className="album-image">
          {album.images ? album.images[0] : 'Awaiting Photography'}
        </div>
        <div className="album-data">
          <div className="row address-data">
            <div className="col-md-12 title">{album.title}</div>
            <div className="col-md-12 description">{album.description}</div>
          </div>
          <div className="row images-data">
            <div className="col-md-6 images-title">Images</div>
            <div className="col-md-6 total">нгфифднлифн </div>
            <div className="col-md-6 price-type">847849</div>
            <div className="col-md-6 seller-type">идфнхидснл</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumBox;
