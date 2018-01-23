import React from 'react';
import { connect } from 'react-redux';

import { fetchAlbums , createAlbum} from './actions';

class Albums extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    console.log(this.props.albums);
    const { albums } = this.props;

    const renderAlbums = albums ? albums.map((album, key) =>
      <div key={key}>
        <h2>{album.title}</h2>
        <div>{album.description}</div>
      </div>) : "Nqma albumi"

    return (
      <div>
        <h1>All albums list here</h1>
        {renderAlbums }
        <Button onClick={}>Add album</Button>
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
  fetchAlbums,
  createAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
