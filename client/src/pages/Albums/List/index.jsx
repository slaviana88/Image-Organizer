import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {Button} from 'reactstrap';
import AlbumBox from './AlbumBox';

import {ALBUM_DETAIL_URL} from './constants';
import {fetchAlbums} from './actions';

import './styles.scss';

class Albums extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAlbums());
  }

  redirectToAbum = album => {
    const url = `/albums/${album.id}`;
    console.log(url, 'url');
    this.props.dispatch(push(url));
  };

  render() {
    const {albums} = this.props;
    console.log('albums', albums);

    const renderAlbums = _.isEmpty(albums)
      ? 'Nqma albumi'
      : albums.map((album, key) => (
          <div key={key} className="col-md-3">
            <AlbumBox
              album={album}
              redirectToAlbum={() => this.redirectToAbum(album)}
            />
          </div>
        ));

    return (
      <div className="list-albums-container">
        <div className="container">
          <div className="row">{renderAlbums}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.albums
  };
};

export default connect(mapStateToProps)(Albums);
