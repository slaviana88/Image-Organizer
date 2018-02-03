import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchAlbum} from './actions';

import './styles.scss';

class AlbumDetail extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  getAlbum = album => {
    console.log(album);
    return (
      <div>
        <div>Title{album.title}</div>
        <div>Descr{album.description}</div>
        <div>Created {album.createdAt}</div>
        <div>Updated {album.updatedAt}</div>
      </div>
    );
  };

  render() {
    console.log('safdjios');
    const {album} = this.props;
    return (
      <div className="album-container">
        {_.isNil(album) ? 'No album found' : this.getAlbum(album)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album.album
  };
};

const mapDispatchToProps = {
  fetchAlbum: fetchAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
