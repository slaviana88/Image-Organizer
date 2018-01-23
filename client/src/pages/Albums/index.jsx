import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import Popup from 'components/Popup';

import {fetchAlbums, createAlbum} from './actions';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateAlbumPopupOpened: false
    };
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  togglePopup = () => {
    this.setState(prevState => ({
      isCreateAlbumPopupOpened: !prevState.isCreateAlbumPopupOpened
    }));
  };

  render() {
    const {isCreateAlbumPopupOpened} = this.state;
    const {albums} = this.props;
    console.log('albums', albums);
    const renderAlbums = _.isEmpty(albums)
      ? 'Nqma albumi'
      : albums.map((album, key) => (
          <div key={key}>
            <h2>{album.title}</h2>
            <div>{album.description}</div>
          </div>
        ));

    return (
      <div>
        <h1>All albums list here</h1>
        {renderAlbums}

        <Button onClick={this.togglePopup}>Add album</Button>

        {!isCreateAlbumPopupOpened ? null : (
          <Popup togglePopup={this.togglePopup}>assadsasf</Popup>
        )}
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
