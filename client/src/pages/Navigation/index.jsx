import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Modal, ModalBody, ModalFooter } from 'components/Modal';

import { deleteState } from '../Albums/Photography/actions';
import AlbumCreateForm from '../Albums/AlbumCreateForm';
import { toggleCreateAlbumModal } from './reducer';

import './styles.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="row">
          <div className="col-xs-1 my-albums-title">
            My Albums <i className="material-icons">keyboard_arrow_right</i>
          </div>
          <div className="col-xs-2 new-album-btn">
            <button
              className="btn btn-secondary"
              onClick={() => {
                this.props.toggleCreateAlbumModal();
                this.props.deleteState();
              }}>
              New Album
            </button>
          </div>
          <div className="col-xs-5" />
          <div className="col-xs-5" />
        </div>
        {!this.props.isOpenModal ? null : (
          <Modal
            show={true}
            onCloseHandler={() => this.props.toggleCreateAlbumModal()}>
            <ModalBody>
              <AlbumCreateForm
                toggleModal={this.props.toggleCreateAlbumModal}
              />
            </ModalBody>
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpenModal: state.navigation.isOpenModal
  };
};

const mapDispatchToProps = {
  toggleCreateAlbumModal,
  deleteState
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
