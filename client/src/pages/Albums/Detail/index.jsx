import React from 'react';
import {connect} from 'react-redux';
import {fetchAlbum} from './actions';

class AlbumDetail extends React.Component {
  componentDidMount() {
    console.log('sdfudhi', this.props.match.params.albumId);
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {
    console.log('safdjios');
    return <div>sauasfsdfijsdifgjrdsifoghjfsd;io</div>;
  }
}

const mapStateToProps = state => {
  return {
    album: state.album.current
  };
};

const mapDispatchToProps = {
  fetchAlbum: fetchAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
