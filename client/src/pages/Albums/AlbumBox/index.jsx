import React from 'react';

import './styles.scss';

const AlbumBox = ({ album }) => {
  return (
    <div className="col-md-3">
      <div className="property-box">
        <div className="property-image">
          {album.images ? album.images[0] : 'Awaiting Photography'}
        </div>
        <div className="property-data">
          <div className="row address-data">
            <div className="col-md-12 main-address">{album.title}</div>
            <div className="col-md-12 sub-address">{album.description}</div>
          </div>
          <div className="row seller-data">
            <div className="col-md-6 price">Images</div>
            <div className="col-md-6 seller">нгфифднлифн </div>

            <div className="col-md-6 price-type">847849</div>
            <div className="col-md-6 seller-type">идфнхидснл</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumBox;
