import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { fetchAlbums, createAlbum } from './actions';
import AlbumBox from './AlbumBox';
import './styles.scss';

class Albums extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums } = this.props;
    console.log('albums', albums);

    const renderAlbums = _.isEmpty(albums)
      ? 'Nqma albumi'
      : albums.map((album, key) => (
          <div key={key}>
            <AlbumBox album={album} />
          </div>
        ));

    return (
      <div className="list-albums-container">
        <div className="container" />
        <h1>All albums list here</h1>
        {renderAlbums}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.albums
  };
};

const mapDispatchToProps = {
  fetchAlbums
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
