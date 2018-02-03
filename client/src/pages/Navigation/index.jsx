import React from 'react';
import PropTypes from 'prop-types';

import {Modal, ModalBody, ModalFooter} from 'components/Modal';

import AlbumCreateForm from '../Albums/AlbumCreateForm';

import './styles.scss';

class Navigation extends React.Component {
  state = {isCreateAlbumModalOpened: false};

  toggleModal = () => {
    this.setState(prevState => ({
      isCreateAlbumModalOpened: !prevState.isCreateAlbumModalOpened
    }));
  };

  render() {
    return (
      <div className="navigation-container">
        <div className="row">
          <div className="col-xs-1 my-albums-title">
            My Albums <i className="material-icons">keyboard_arrow_right</i>
          </div>
          <div className="col-xs-2 new-album-btn">
            <button className="btn btn-secondary" onClick={this.toggleModal}>
              New Album
            </button>
          </div>
          <div className="col-xs-5" />
          <div className="col-xs-5" />
        </div>
        {!this.state.isCreateAlbumModalOpened ? null : (
          <Modal show={true} onCloseHandler={this.toggleModal}>
            <ModalBody>
              <AlbumCreateForm />
            </ModalBody>
            <ModalFooter>hello</ModalFooter>
          </Modal>
        )}
      </div>
    );
  }
}

export default Navigation;
