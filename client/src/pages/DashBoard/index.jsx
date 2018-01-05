import React from 'react';
import {Link} from 'react-router-dom';

import paths from 'paths';
import Albums from 'pages/Albums';

class DashBoard extends React.Component {
  render() {
    return (
      <div>
        Menu here
        <div>
          <Link to={paths.albums}>MyAlbums</Link>
        </div>
        <div>
          <Link to={paths.createAlbum}>Create new album</Link>
        </div>
      </div>
    );
  }
}

export default DashBoard;
