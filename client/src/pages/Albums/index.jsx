import React from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from './actions';

class Albums extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    console.log(this.props.albums);
    const { albums } = this.props;

    return (
      <div>
        <h1>All albums list here</h1>
        {albums ? albums.albums : 'Nqma albumi'}
        {/* {albums &&
          albums.map(album => {
            return <div key={album.id}>{album.name}</div>;
          })} */}
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
