import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import AlbumCreateForm from './AlbumCreateForm';
import {Modal, ModalBody, ModalFooter} from 'components/Modal';

import {fetchAlbums, createAlbum} from './actions';

import './styles.scss';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateAlbumModalOpened: false
    };
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isCreateAlbumModalOpened: !prevState.isCreateAlbumModalOpened
    }));
  };

  render() {
    const {isCreateAlbumModalOpened} = this.state;
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
      <div className="list-albums">
        {/*<MainNavigation />*/}

        <div className="container" />
        <h1>All albums list here</h1>
        {renderAlbums}

        <Button onClick={this.toggleModal}>Add album</Button>

        {!isCreateAlbumModalOpened ? null : (
          <Modal show={true} onCloseHandler={this.toggleModal}>
            <ModalBody>
              asdsa
              <AlbumCreateForm />
            </ModalBody>
            <ModalFooter>hello</ModalFooter>
          </Modal>
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
