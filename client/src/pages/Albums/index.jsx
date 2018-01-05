import React from 'react';
import {connect} from 'react-redux';

import paths from 'paths';
import {Link} from 'react-router-dom';

import {fetchAlbums} from 'modules/albums';

class Albums extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    console.log(this.props.albums);
    const {albums} = this.props;

    return (
      <div>
        All albums list here
        {albums &&
          albums.map(album => {
            return <div key={album.id}>{album.name}</div>;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => state.albums;

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
