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
    return (
      <div>
        <div>Title{album.title}</div>
        <div>Descr{album.description}</div>
        <div>Created {album.createdAt}</div>
        <div>Updated {album.updatedAt}</div>
        {album.images &&
          album.images.map((img, index) => {
            return (
              <div key={index}>
                name {img.name}
                <img src={'http://localhost:3001/static/' + img.pathToFile} />
              </div>
            );
          })}
      </div>
    );
  };

  render() {
    const {album} = this.props;
    return (
      <div className="album-container">
        {_.isNil(album) ? 'No album found' : this.getAlbum(album[0])}
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
