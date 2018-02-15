import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { Modal, ModalBody } from 'components/Modal';
import AddImageForm from './AddImageForm';
import PhotographyDropzone from '../Photography';

import { fetchAlbum } from './actions';
import './styles.scss';

const transformDateTimeToDate = dateString => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
  });
};

class AlbumDetail extends React.Component {
  state = { imageUrl: null, openAddImage: false };

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  viewImage = imageUrl => {
    console.log(imageUrl);
    this.setState({ imageUrl });
  };

  closeImage = () => this.setState({ imageUrl: null });

  closeAddImage = () => this.setState({ openAddImage: false });

  openAddImage = () => this.setState({ openAddImage: true });

  getAlbum = album => {
    return (
      <div className="row center-xs">
        <div className="col-xs-11">
          <div className="row">
            <div className="col-xs-8">
              <h2 className="album-title">{album.title}</h2>
            </div>
            <div className="col-xs-4 album-dates">
              <span className="album-date-info">
                Created At: {transformDateTimeToDate(album.createdAt)}
              </span>
              <span className="album-date-info">
                Last update: {transformDateTimeToDate(album.createdAt)}
              </span>
            </div>
          </div>
          <div className="divider" />
          <div className="album-description">{album.description}</div>
          <div className="album-dropzone">
            <PhotographyDropzone />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { imageUrl, openAddImage } = this.state;
    const { album } = this.props;

    return (
      <div className="album-container">
        {_.isNil(album) ? 'No album found' : this.getAlbum(album[0])}

        {imageUrl && (
          <Modal show={true} onCloseHandler={this.closeImage}>
            <ModalBody>
              <div className="view-image">
                <img src={'http://localhost:3001/static/' + imageUrl} />
              </div>
              <div>Tags and places here</div>
            </ModalBody>
          </Modal>
        )}
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
